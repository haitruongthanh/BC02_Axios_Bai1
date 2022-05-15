const BASE_URL = "https://6271e18825fed8fcb5ec0d68.mockapi.io/trung-tam";
let listNguoiDung = [];
let USER_LIST_LOCAL = "USER_LIST_LOCAL";
let validatorNd = new ValidatorND();

//Lay danh sach Hoc Vien va Giao Vien
const getDanhSachNguoiDung = async function () {
  turnOnLoading();
  await axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (response) {
      xuatDanhSachVaoBang(response.data);
      turnOffLoading();
      saveToLocal();
    })
    .catch(function (error) {
      console.log(error);
      turnOffLoading();
    });
};
getDanhSachNguoiDung();

const xoaNguoiDung = (id) => {
  turnOnLoading();

  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then(function (response) {
      getDanhSachNguoiDung();
      turnOffLoading();
      saveToLocal();
    })
    .catch(function (error) {
      console.log(error);
      turnOffLoading();
    });
};

//Them moi Nguoi Dung
const themMoiNguoiDung = function () {
  turnOnLoading();
  var newNguoiDung = layThongTinTuForm();
  let isValid = true;
  let isValidTaiKhoan =
    kiemTraTaiKhoan(validatorNd) &&
    validatorNd.checkIdDuplicate(newNguoiDung.taiKhoan, listNguoiDung);
  let isValidTen = kiemTraHoTen(validatorNd);
  let isValidMatKhau = kiemTraMatkhau(validatorNd);
  let isValidEmail = kiemTraEmail(validatorNd);
  let isValidImg = kiemTraHinhAnh(validatorNd);
  let isValidUserType = kiemTraLoaiNguoiDung(validatorNd);
  let isValidLanguage = kiemTraNgonNgu(validatorNd);
  let isValidDiscript = kiemTraMoTa(validatorNd);

  isValid =
    isValidTaiKhoan &&
    isValidTen &&
    isValidMatKhau &&
    isValidEmail &&
    isValidImg &&
    isValidUserType &&
    isValidLanguage &&
    isValidDiscript;

  console.log({
    isValid,
  });

  if (isValid) {
    console.log(newNguoiDung);
    axios({
      url: BASE_URL,
      method: "POST",
      data: newNguoiDung,
    })
      .then(function (response) {
        $("#myModal").modal("hide");
        getDanhSachNguoiDung();
        resetForm();
        turnOffLoading();
        saveToLocal();
      })
      .catch(function (error) {
        turnOffLoading();
      });
  }
  turnOffLoading();
};

//Cap nhat nguoi dung
const layIdNguoiDung = function (id) {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then(function (response) {
      duaThongTinLenForm(response.data);
      document.querySelector("#idNguoiDung span").innerHTML = response.data.id;
    })
    .catch(function (err) {
      console.log(err);
    });
};

const capNhatNguoiDung = function () {
  turnOnLoading();
  var idNguoiDung = document.querySelector("#idNguoiDung span").innerHTML * 1;

  let isValid = true;
  let isValidTaiKhoan = kiemTraTaiKhoan(validatorNd);
  let isValidTen = kiemTraHoTen(validatorNd);
  let isValidMatKhau = kiemTraMatkhau(validatorNd);
  let isValidEmail = kiemTraEmail(validatorNd);
  let isValidImg = kiemTraHinhAnh(validatorNd);
  let isValidUserType = kiemTraLoaiNguoiDung(validatorNd);
  let isValidLanguage = kiemTraNgonNgu(validatorNd);
  let isValidDiscript = kiemTraMoTa(validatorNd);

  isValid =
    isValidTaiKhoan &&
    isValidTen &&
    isValidMatKhau &&
    isValidEmail &&
    isValidImg &&
    isValidUserType &&
    isValidLanguage &&
    isValidDiscript;
  console.log(
    isValidTaiKhoan,
    isValidTen,
    isValidMatKhau,
    isValidEmail,
    isValidImg,
    isValidUserType,
    isValidLanguage,
    isValidDiscript
  );

  if (isValid) {
    var updatedNguoiDung = layThongTinTuForm();
    axios({
      url: `${BASE_URL}/${idNguoiDung}`,
      method: "PUT",
      data: updatedNguoiDung,
    })
      .then(function (response) {
        $("#myModal").modal("hide");
        getDanhSachNguoiDung();
        resetForm();
        turnOffLoading();
        saveToLocal();
      })
      .catch(function (error) {
        console.log(error);
        turnOffLoading();
      });
  }
  turnOffLoading();
};

//Loc Danh sach nguoi dung (cach 2)
const locNguoiDung = function () {
  var inputData = document.getElementById("locNguoiDung").value;
  var listGiaoVien = [];
  var listHocVien = [];
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (response) {
      response.data.forEach(function (item) {
        if (item.loaiND) {
          listGiaoVien.push(item);
        } else {
          listHocVien.push(item);
        }
      });
      if (inputData == "GV") {
        xuatDanhSachVaoBang(listGiaoVien);
      } else if (inputData == "HV") {
        xuatDanhSachVaoBang(listHocVien);
      } else {
        xuatDanhSachVaoBang(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

let saveToLocal = async () => {
  await axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((response) => {
      let listUserJson = JSON.stringify(response.data);
      localStorage.setItem(USER_LIST_LOCAL, listUserJson);
    })
    .catch((error) => {
      console.log(error);
    });
};

let listUserJson = localStorage.getItem(USER_LIST_LOCAL);
if (listUserJson) {
  listNguoiDung = JSON.parse(listUserJson);
}
