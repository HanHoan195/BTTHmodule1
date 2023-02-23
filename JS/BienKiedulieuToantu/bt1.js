    
   
    diemSinh = prompt("Nhập điểm Sinh học");
    diemLy = prompt("Nhập điểm Vật lý");
    diemHoa = prompt("Nhập điểm Hóa học");

    let Hoa = parseInt(diemHoa);
    let Ly = parseInt(diemLy);
    let Sinh = parseInt(diemSinh);

    let tongDiem = Hoa + Ly + Sinh;
    let diemTrungBinh = ( Hoa + Ly + Sinh ) / 3;
    document.write("Tổng điểm: " + tongDiem);
    document.write('<br>');
    document.write("Điểm trung bình:" +diemTrungBinh);


