<form id="uploadForm" action="upload.php" method="post">
    <label>Upload Image File:</label><br />
    <input name="file" type="file" class="inputFile" id="files" />
    <img id="image" />
    <input type="submit" value="Submit" class="btnSubmit" />
</form>

<script src="/assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function(e) {
    document.getElementById('files').onchange = function() {
        var file = this.files[0]; // Lấy file từ input
        var fileSize = file.size; // Lấy kích thước file (tính bằng byte)

        // Kiểm tra nếu kích thước file lớn hơn 10MB (10MB = 10 * 1024 * 1024 bytes)
        if (fileSize > 10 * 1024 * 1024) {
            alert("File size must be less than 10MB!"); // Thông báo nếu file quá lớn
            return; // Dừng lại không upload
        }

        var src = URL.createObjectURL(file);
        document.getElementById('image').src = src; // Hiển thị hình ảnh nếu là file ảnh
    };

    $("#uploadForm").on('submit', function(e) {
        console.log("SUBMIT");
        e.preventDefault(); // Ngừng gửi form mặc định

        var formData = new FormData(this); // Tạo FormData từ form

        // Gửi file qua AJAX
        $.ajax({
            url: "/upload", // Đường dẫn xử lý upload file
            type: "POST",
            data: formData, // Gửi dữ liệu FormData (chứa file)
            contentType: false, // Không set contentType (sử dụng multipart)
            cache: false,
            processData: false, // Không xử lý dữ liệu theo cách mặc định
            success: function(data) {
                console.log(data); // In ra dữ liệu trả về từ server
            },
            error: function(err) {
                console.log(err.responseJSON, "ERROR"); // In ra lỗi nếu có
            }
        });
    });
});
</script>