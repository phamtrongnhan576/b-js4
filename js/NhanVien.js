export class NhanVien {
    constructor(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {
        this.taiKhoan = taiKhoan;
        this.hoTen = hoTen;
        this.email = email;
        this.matKhau = matKhau;
        this.ngayLam = ngayLam;
        this.luongCoBan = luongCoBan;
        this.chucVu = chucVu;
        this.gioLam = gioLam;
    }

    tinhLuong() {
        let heSoLuong = 1;
        if (this.chucVu === "Sếp") {
            heSoLuong = 3;
        } else if (this.chucVu === "Trưởng phòng") {
            heSoLuong = 2;
        } else if (this.chucVu === "Nhân viên") {
            heSoLuong = 1;
        }
        return this.luongCoBan * heSoLuong;
    }

    xepLoai() {
        if (this.gioLam >= 192) {
            return "Xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Giỏi";
        } else if (this.gioLam >= 160) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    }
}