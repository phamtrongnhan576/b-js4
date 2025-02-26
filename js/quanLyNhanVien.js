import { NhanVien } from "../js/NhanVien.js";
import {
    kiemTraRong,
    validateChucVu,
    validateEmail,
    validateGioLam,
    validateHoTen,
    validateMatKhau,
    validateNgayLam,
    validateTaiKhoan,
    validateLuongCB,
} from "../js/validations.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let arrNhanVien = [];

$("#btnThemNV").onclick = () => {
    let nv = new NhanVien();

    let arrayInput = [...$$("#formNhanVien .form-control")];
    Object.assign(
        nv,
        Object.fromEntries(arrayInput.map((input) => [input.id, input.value]))
    );

    let {
        taiKhoan,
        hoTen,
        email,
        matKhau,
        ngayLam,
        luongCoBan,
        gioLam,
        chucVu,
    } = nv;

    let valid = true;
    valid &=
        kiemTraRong(taiKhoan, "tbTKNV", "Mã nhân viên") &&
        validateTaiKhoan(taiKhoan, "tbTKNV", "Mã nhân viên");

    valid &=
        kiemTraRong(hoTen, "tbTen", "Tên nhân viên") &&
        validateHoTen(hoTen, "tbTen", "Tên nhân viên");

    valid &=
        kiemTraRong(email, "tbEmail", "Email") &&
        validateEmail(email, "tbEmail", "Email");

    valid &=
        kiemTraRong(matKhau, "tbMatKhau", "Mật Khẩu") &&
        validateMatKhau(matKhau, "tbMatKhau", "Mật Khẩu");

    valid &=
        kiemTraRong(ngayLam, "tbNgay", "Ngày làm") &&
        validateNgayLam(ngayLam, "tbNgay", "Ngày làm");

    valid &=
        kiemTraRong(luongCoBan, "tbLuongCB", "Lương cơ bản") &&
        validateLuongCB(luongCoBan, "tbLuongCB", "Lương cơ bản");

    valid &=
        kiemTraRong(chucVu, "tbChucVu", "Chức vụ") &&
        validateChucVu(chucVu, "tbChucVu", "Chức vụ");

    valid &=
        kiemTraRong(gioLam, "tbGiolam", "Giờ làm") &&
        validateGioLam(gioLam, "tbGiolam", "Giờ làm");

    console.log(valid);

    // Nếu tất cả đều hợp lệ, thêm nhân viên
    if (valid) {
        arrNhanVien.push(nv);
        renderNhanVien(arrNhanVien);
        saveLocalStorage();
    }
};

window.renderNhanVien = function (arrNhanVien) {
    $("#tableDanhSach").innerHTML = arrNhanVien
        .map(
            (nv) =>
                `<tr>
                    <td>${nv.taiKhoan}</td>
                    <td>${nv.hoTen}</td>
                    <td>${nv.email}</td>
                    <td>${nv.ngayLam}</td>
                    <td>${nv.chucVu}</td>
                    <td>${nv.tinhLuong()}</td>
                    <td>${nv.xepLoai()}</td>
                    <td>
                        <button class="btn btn-primary" 
                                data-toggle="modal" 
                                data-target="#myModal" 
                                onclick="capNhatNhanVien('${nv.taiKhoan}')">
                                Chỉnh sửa
                        </button>
                        <button class="btn btn-danger" 
                                onclick="xoaNhanVien('${nv.taiKhoan}')">
                                Xóa
                        </button>
                    
                    </td>
                </tr>`
        )
        .join("");
    return;
};

window.xoaNhanVien = function (maNhanVien) {
    let indexDel = arrNhanVien.findIndex((nv) => nv.taiKhoan === maNhanVien);
    console.log(indexDel);
    if (indexDel != -1) {
        arrNhanVien.splice(indexDel, 1);
        renderNhanVien(arrNhanVien);
        saveLocalStorage();
    }
};
window.capNhatNhanVien = function (maNhanVien) {
    let nhanVienUpdate = arrNhanVien.find((nv) => nv.taiKhoan === maNhanVien);
    if (nhanVienUpdate) {
        for (let key in nhanVienUpdate) {
            $(`#${key}`).value = nhanVienUpdate[key];
        }
    }
};

$("#btnCapNhat").onclick = () => {
    window.luuTTNhanVien = () => {
        let nvEdit = new NhanVien();
        let arrayInput = [...$$("#formNhanVien .form-control")];
        Object.assign(
            nvEdit,
            Object.entries(arrayInput.map((input) => [input.id, input.value]))
        );
        let nvTrongMang = arrNhanVien.find(
            (nv) => nv.taiKhoan === nvEdit.taiKhoan
        );
        if (nvTrongMang) {
            for (let key in nvTrongMang) {
                nvTrongMang[key] = nvEdit[key];
            }
            renderNhanVien(nvTrongMang);
            saveLocalStorage();
        }
    };
};

// Hàm loại bỏ dấu tiếng Việt
function removeVietnameseTones(str) {
    return str
        .normalize("NFD") // Tách dấu ra khỏi ký tự gốc
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu
        .toLowerCase(); // Chuyển về chữ thường
}

$("#btn-search").onclick = () => {
    console.log("Bắt đầu tìm kiếm...");
    const tuKhoa = removeVietnameseTones($("searchName").value.trim());

    const arrNhanVienTimKiem = arrNhanVien.filter((nv) =>
        removeVietnameseTones(nv.xepLoai()).includes(tuKhoa)
    );

    renderNhanVien(arrNhanVienTimKiem);
};

function saveLocalStorage() {
    if (arrNhanVien.length) {
        localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
    } else {
        localStorage.removeItem("arrNhanVien");
    }
}

function loadLocalStorage() {
    let data = localStorage.getItem("arrNhanVien");
    arrNhanVien = data
        ? JSON.parse(data).map((nv) => Object.assign(new NhanVien(), nv))
        : [];
    renderNhanVien(arrNhanVien);
}

loadLocalStorage();
