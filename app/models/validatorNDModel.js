let ValidatorND = function() {
    this.checkEmtyInput = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput).value.trim();
        if (!valueInput) {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        } else {
            document.getElementById(idSpan).innerHTML = "";
            return true;
        }
    };

    this.checkName = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput).value.trim();
        var letters =
            /^[a-zA-Z\s_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/;
        if (letters.test(valueInput)) {
            document.getElementById(idSpan).innerHTML = "";
            return true;
        } else {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        }
    };

    this.checkPass = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput).value.trim();
        var patern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{6,8}$/;

        if (patern.test(valueInput)) {
            document.getElementById(idSpan).innerHTML = "";
            return true;
        } else {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        }
    };

    this.checkEmail = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput).value.trim();
        var patern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (patern.test(valueInput)) {
            document.getElementById(idSpan).innerHTML = "";
            return true;
        } else {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        }
    };

    this.checkTypeUser = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput).value;
        if (valueInput == "GV" || valueInput == "HV") {
            document.getElementById(idSpan).innerHTML = "";
            return true;
        } else {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        }
    };

    this.checkLanguage = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput);
        console.log("valueInput.selectedIndex", valueInput.selectedIndex);
        if (valueInput.selectedIndex === 0 || valueInput.selectedIndex === -1) {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        } else {
            document.getElementById(idSpan).innerHTML = "";
            return true;
        }
    };

    this.checkDiscription = function(idInput, idSpan, message) {
        var valueInput = document.getElementById(idInput).value.trim();
        if (valueInput.length >= 60) {
            document.getElementById(idSpan).style.display = "block";
            document.getElementById(idSpan).innerHTML = message;
            return false;
        } else {
            return true;
        }
    };
};