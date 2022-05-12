const BASE_URL = "https://6271e18825fed8fcb5ec0d68.mockapi.io/trung-tam";

// console.log("http://loremflickr.com/640/480/animals");

//Lay danh sach Hoc Vien va Giao Vien
const getDanhSachNguoiDung = function () {
  let result = [];
  turnOnLoading();
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (response) {
      result = response.data;
      xuatDanhSachVaoBang(result);
      turnOffLoading();
    })
    .catch(function (error) {
      console.log(error);
      turnOffLoading();
    });
};

getDanhSachNguoiDung();

//Xoa Nguoi dung
const xoaNguoiDung = (id) => {
  turnOnLoading();

  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then(function (response) {
      getDanhSachNguoiDung();
      turnOffLoading();
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
  axios({
    url: BASE_URL,
    method: "POST",
    data: newNguoiDung,
  })
    .then(function (response) {
      $("#myModal").modal("hide");
      console.log(newNguoiDung);
      getDanhSachNguoiDung();
      turnOffLoading();
    })
    .catch(function (error) {
      turnOffLoading();
    });
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
  var updatedNguoiDung = layThongTinTuForm();
  axios({
    url: `${BASE_URL}/${idNguoiDung}`,
    method: "PUT",
    data: updatedNguoiDung,
  })
    .then(function (response) {
      $("#myModal").modal("hide");
      getDanhSachNguoiDung();
      turnOffLoading();
    })
    .catch(function (error) {
      console.log(error);
    });
};

//Loc Danh sach nguoi dung (cach 1)
/* const locNguoiDung = function () {
  var inputData =
    document.getElementById("locNguoiDung").value == "GV" ? true : false;
  var listGiaoVien = [];
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (response) {
      var result = response.data.forEach(function (item) {
        if (item.loaiND == inputData) {
          listGiaoVien.push(item);
        }
      });
      xuatDanhSachVaoBang(listGiaoVien);
    })
    .catch(function (error) {
      console.log(error);
    });
}; */

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
