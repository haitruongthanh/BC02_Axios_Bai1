const xuatDanhSachVaoBang = (dsnd) => {
  let contentHTML = "";
  dsnd.forEach(function (item) {
    var contentTr = /* html */ `
          <tr>
              <td>${item.id}</td>
              <td>${item.taiKhoan}</td>
              <td>${item.matKhau}</td>
              <td>${item.hoTen}</td>
              <td>${item.email}</td>
              <td>${item.ngonNgu}</td>
              <td>${item.loaiND ? "GV" : "HV"}</td>
              <td><button 
                  type="button" 
                  class="btn btn-outline-info" 
                  data-toggle="modal"
                  data-target="#myModal"
                  onclick="layIdNguoiDung(${item.id})"
                  >Sửa</button>
                  <button 
                  type="button" 
                  class="btn btn-outline-danger"
                  onclick="xoaNguoiDung(${item.id})"
                  >Xóa</button>
              </td>
          </tr>
          `;
    contentHTML += contentTr;
  });
  document.getElementById("tblDanhSachNguoiDung").innerHTML = contentHTML;
};

const layThongTinTuForm = function () {
  var taiKhoan = document.getElementById("TaiKhoan").value;
  var hoTen = document.getElementById("HoTen").value;
  var matKhau = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var hinhAnh = document.getElementById("HinhAnh").value;
  var loaiND =
    document.getElementById("loaiNguoiDung").value == "GV" ? true : false;
  var ngonNgu = document.getElementById("loaiNgonNgu").value;
  var moTa = document.getElementById("MoTa").value;

  var newNguoiDung = new NguoiDung(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    loaiND,
    ngonNgu,
    moTa,
    hinhAnh
  );
  return newNguoiDung;
};

const duaThongTinLenForm = function (nguoiDung) {
  document.getElementById("TaiKhoan").value = nguoiDung.taiKhoan;
  document.getElementById("HoTen").value = nguoiDung.hoTen;
  document.getElementById("MatKhau").value = nguoiDung.matKhau;
  document.getElementById("Email").value = nguoiDung.email;
  document.getElementById("HinhAnh").value = nguoiDung.hinhAnh;
  document.getElementById("loaiNguoiDung").value = nguoiDung.loaiND
    ? "GV"
    : "HV";
  document.getElementById("loaiNgonNgu").value = nguoiDung.ngonNgu;
  document.getElementById("MoTa").value = nguoiDung.moTa;
};

let kiemTraTaiKhoan = function (validatorNd) {
  return validatorNd.checkEmtyInput(
    "TaiKhoan",
    "tbTaiKhoan",
    "Vui lòng nhập tài khoản"
  );
};

let kiemTraHoTen = function (validatorNd) {
  return (
    validatorNd.checkEmtyInput("HoTen", "tbHoTen", "Vui lòng nhập Họ tên") &&
    validatorNd.checkName(
      "HoTen",
      "tbHoTen",
      "Họ tên không chứa số và ký tự đặc biệt"
    )
  );
};

let kiemTraMatkhau = function (validatorNd) {
  return (
    validatorNd.checkEmtyInput(
      "MatKhau",
      "tbMatKhau",
      "Vui lòng nhập Mật khẩu"
    ) && validatorNd.checkPass("MatKhau", "tbMatKhau", "Mật khẩu sai định dạng")
  );
};

let kiemTraEmail = function (validatorNd) {
  return (
    validatorNd.checkEmtyInput("Email", "tbEmail", "Vui lòng nhập Email") &&
    validatorNd.checkEmail("Email", "tbEmail", "Email không đúng định dạng")
  );
};

let kiemTraHinhAnh = function (validatorNd) {
  return validatorNd.checkEmtyInput(
    "HinhAnh",
    "tbHinhAnh",
    "Vui lòng nhập Hình ảnh"
  );
};

let kiemTraLoaiNguoiDung = function (validatorNd) {
  return validatorNd.checkTypeUser(
    "loaiNguoiDung",
    "tbLoaiNguoiDung",
    "Vui lòng chọn loại người dùng"
  );
};

let kiemTraNgonNgu = function (validatorNd) {
  return validatorNd.checkLanguage(
    "loaiNgonNgu",
    "tbLoaiNgonNgu",
    "Vui lòng chọn ngôn ngữ"
  );
};

let kiemTraMoTa = function (validatorNd) {
  return (
    validatorNd.checkEmtyInput("MoTa", "tbMoTa", "Vui lòng nhập nội dung") &&
    validatorNd.checkDiscription("MoTa", "tbMoTa", "Nội dung nhập quá 60 ký tự")
  );
};

function turnOnLoading() {
  document.getElementById("loading").style.display = "flex";
}

function turnOffLoading() {
  document.getElementById("loading").style.display = "none";
}

function resetForm() {
  document.getElementById("form-reset").reset();
}
