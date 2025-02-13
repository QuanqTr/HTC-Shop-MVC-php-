<?php

use app\core\Application;
?>

<link rel="stylesheet" type="text/css" href="/assets/lib/jquery.gritter/css/jquery.gritter.css">

<?php Application::$app->showErrorMsgs('categories', true) ?>
<?php Application::$app->showMsg('success') ?>
<div class="row">
    <div class="col-12">
        <div class="card card-border-color card-border-color-primary">
            <div class="card-header card-header-divider">
                Category
                <span class="card-subtitle">

                </span>
            </div>
            <?php if (!$data) : ?>
                <div class="card-body">
                    <img id="image" style="max-width: 60px;" />
                    <!-- <form id="uploadForm" action="/upload" method="post">
                        <label>Avatar:</label><br />
                        <input name="file" type="file" class="inputFile" id="files" />
                        <input type="submit" value="Upload" class="btnSubmit" />
                    </form> -->

                    <form action="/admin/categories/create" method="POST">
                        <!-- <input class="form-control form-control-sm" type="hidden" name="avatar"> -->
                        <div class="form-group row">
                            <label class="col-12 col-form-label mb-2">Tên Loại</label>
                            <div class="col-12 col-sm-8 col-lg-6">
                                <input class="form-control form-control-sm" type="text" name="name">
                            </div>
                        </div>
                        <!-- <div class="form-group row">
                            <label class="col-12 col-form-label mb-2">Loại</label>
                            <div class="col-12 col-sm-8 col-lg-6">
                                <select class="form-control select2 select2-sm" name="building">
                                    <option value="A101">A101</option>
                                    <option value="A201">A202</option>
                                    <option value="A301">A303</option>
                                </select>
                            </div>
                        </div> -->
                        <div class="form-group row">
                            <label class="col-12 col-form-label mb-2">Mô tả chi tiết</label>
                            <div class="col-12 col-sm-8 col-lg-6">
                                <textarea class="form-control form-control-sm" type="text" name="description"></textarea>
                            </div>
                        </div>

                        <div class="form-group row"></div>
                        <input class="btn btn-primary" type="submit" value="Xác nhận">
                    </form>

                </div>
            <?php else : ?>
                <div class="card-body">
                    <!-- <img id="image" style="max-width: 60px;" src="/uploads/<?= $data->avatar ?>" /> -->
                    <!-- <form id="uploadForm" action="/upload" method="post">
                        <label>Avatar:</label><br />
                        <input name="file" type="file" class="inputFile" id="files" />
                        <input type="submit" value="Upload" class="btnSubmit" />
                    </form> -->

                    <form action="/admin/categories/create" method="POST">
                        <!-- <input value=/uploads/<?= $data->avatar ?> class="form-control form-control-sm" type="hidden" name="avatar"> -->
                        <div class="form-group row">
                            <label class="col-12 col-form-label mb-2">Tên Loại</label>
                            <div class="col-12 col-sm-8 col-lg-6">
                                <input value="<?= $data->name ?>" class="form-control form-control-sm" type="text" name="name">
                            </div>
                        </div>
                        <!-- <div class="form-group row">
                            <label class="col-12 col-form-label mb-2">Loại</label>
                            <div class="col-12 col-sm-8 col-lg-6">
                                <select class="form-control select2 select2-sm" name="building">
                                    <option value="A101" <?= $data->building === "A101" ? "selected" : "" ?>>A101</option>
                                    <option value="A201" <?= $data->building === "A201" ? "selected" : "" ?>>A202</option>
                                    <option value="A301" <?= $data->building === "A301" ? "selected" : "" ?>>A303</option>
                                </select>
                            </div>
                        </div> -->
                        <div class="form-group row">
                            <label class="col-12 col-form-label mb-2">Mô tả chi tiết</label>
                            <div class="col-12 col-sm-8 col-lg-6">
                                <textarea class="form-control form-control-sm" type="text" name="description"><?= html_entity_decode($data->description) ?></textarea>
                            </div>
                        </div>

                        <div class="form-group row"></div>
                        <input class="btn btn-primary" type="submit" value="Xác nhận">
                    </form>
                </div>
            <?php endif ?>
        </div>
    </div>
</div>

@script
<script src="/assets/lib/jquery.gritter/js/jquery.gritter.js" type="text/javascript"></script>
<script>
    $(document).ready(function() {
        //-initialize the javascript
        App.init();
        App.uiNotifications();
    });
</script>
<script type="text/javascript">
    $(document).ready(function(e) {
        document.getElementById('files').onchange = function() {
            var src = URL.createObjectURL(this.files[0])
            document.getElementById('image').src = src
        }

        $("#uploadForm").on('submit', (function(e) {
            e.preventDefault();
            $.ajax({
                url: "/upload",
                type: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function(data) {
                    $('input[name="avatar"]').val(data.url);

                    $.gritter.add({
                        title: 'Notification',
                        text: 'Upload file success',
                        class_name: 'color success'
                    });


                },
                error: function(err) {
                    $.gritter.add({
                        title: 'Notification',
                        text: err.responseJSON?.errors[0],
                        class_name: 'color danger'
                    });
                }
            });
        }));
    });
</script>
@endScript