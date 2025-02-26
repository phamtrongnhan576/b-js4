export function kiemTraRong(value, selectorId, textErr) {
    if (!value || value.trim() === "") {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} không được bỏ trống`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}
// Kiểm tra tài khoản
export function validateTaiKhoan(taiKhoan, selectorId, textErr) {
    let taiKhoanRegex = /^\d{4,6}$/;
    if (!taiKhoan.match(taiKhoanRegex)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} phải từ 4-6 ký số!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra họ tên
export function validateHoTen(hoTen, selectorId, textErr) {
    let hoTenRegex = /^[A-Za-zÀ-Ỹà-ỹ\s]+$/;
    if (!hoTen.match(hoTenRegex)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} chỉ chứa chữ!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra email
export function validateEmail(email, selectorId, textErr) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.match(emailRegex)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} không hợp lệ!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra mật khẩu
export function validateMatKhau(matKhau, selectorId, textErr) {
    let passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (!matKhau.match(passwordRegex)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} 6-10 ký tự, ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra ngày làm
export function validateNgayLam(ngayLam, selectorId, textErr) {
    let ngayLamRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!ngayLam.match(ngayLamRegex)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} không hợp lệ (mm/dd/yyyy)!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra lương cơ bản
export function validateLuongCB(luongCB, selectorId, textErr) {
    let luong = Number(luongCB);
    if (luong < 1000000 || luong > 20000000 || isNaN(luong)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} từ 1,000,000 - 20,000,000!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra chức vụ
export function validateChucVu(chucVu, selectorId, textErr) {
    let chucVuHopLe = ["Sếp", "Trưởng phòng", "Nhân viên"];
    if (!chucVuHopLe.includes(chucVu)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} không hợp lệ!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}

// Kiểm tra số giờ làm
export function validateGioLam(gioLam, selectorId, textErr) {
    let gio = Number(gioLam);
    if (gio < 80 || gio > 200 || isNaN(gio)) {
        document.getElementById(
            selectorId
        ).innerHTML = `${textErr} phải từ 80 - 200 giờ!`;
        return false;
    }
    document.getElementById(selectorId).innerHTML = "";
    return true;
}
