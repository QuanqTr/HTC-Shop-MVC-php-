<div class="container mt-4">
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-md-4">
                    <div class="widget widget-tile">
                        <div class="chart sparkline" id="spark1">
                            <canvas width="85" height="35"
                                style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                        </div>
                        <div class="data-info">
                            <div class="desc">Họ và Tên (*)</div>
                            <div class="value"><?php echo $data->firstname ?></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="widget widget-tile">
                        <div class="chart sparkline" id="spark2">
                            <canvas width="81" height="35"
                                style="display: inline-block; width: 81px; height: 35px; vertical-align: top;"></canvas>
                        </div>
                        <div class="data-info">
                            <div class="desc">Số điện thoại</div>
                            <div class="value"><?php echo $data->phone ?></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="widget widget-tile">
                        <div class="chart sparkline" id="spark3">
                            <canvas width="85" height="35"
                                style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                        </div>
                        <div class="data-info">
                            <div class="desc">Địa chỉ</div>
                            <div class="value"><?php echo $data->diachi ?></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mt-4">
                    <div class="widget widget-tile">
                        <div class="chart sparkline" id="spark4">
                            <canvas width="85" height="35"
                                style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                        </div>
                        <div class="data-info">
                            <div class="desc">Email</div>
                            <div class="value"><?php echo $data->email ?></div>
                        </div>
                    </div>
                </div>


                <div class="col-md-4 mt-4">
                    <div class="widget widget-tile">
                        <div class="chart sparkline" id="spark5">
                            <canvas width="85" height="35"
                                style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                        </div>
                        <div class="data-info">
                            <div class="desc">Tên đăng nhập</div>
                            <div class="value"><?php echo $data->login_id ?></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mt-4">
                    <div class="widget widget-tile">
                        <div class="chart sparkline" id="spark6">
                            <canvas width="85" height="35"
                                style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                        </div>
                        <div class="data-info">
                            <div class="desc">Avatar</div>
                            <div class="value">
                                <img id="image" class="img-fluid" style="max-width: 100%; height: auto;"
                                    src="/uploads/<?= $data->avatar ?>" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div class="col-md-4 mt-4">
        <div class="data-info">
            <a href="/user/edit">
                <button type="button" class="btn btn-info w-30" style="margin-left: 800px;color:white;"><i
                        class="bi bi-pencil" style="color:white;"></i> Sửa
                </button></button>
            </a>
        </div>
    </div>
</div>

<script src="/assets/lib/countup/countUp.min.js" type="text/javascript"></script>
<script>
$(document).ready(function() {
    //-initialize the javascript
    App.init();
    App.dashboard();
});
</script>