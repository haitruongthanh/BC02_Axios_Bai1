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

function turnOnLoading() {
  document.getElementById("loading").style.display = "flex";
}

function turnOffLoading() {
  document.getElementById("loading").style.display = "none";
}
