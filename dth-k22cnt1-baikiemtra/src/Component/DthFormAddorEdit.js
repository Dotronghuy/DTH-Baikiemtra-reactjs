import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/DthApp'; 

export default function DthSinhVienAddOrEdit({ initialValues, onDthClose, onDthSubmitForm }) {
  const [dthId, setDthId] = useState(initialValues ? initialValues.id : '');
  const [dthMaSV, setDthMaSV] = useState(initialValues ? initialValues.DthMaSV : '');
  const [dthHoSV, setDthHoSV] = useState(initialValues ? initialValues.DthHoSV : '');
  const [dthTenSV, setDthTenSV] = useState(initialValues ? initialValues.DthTenSV : '');
  const [dthPhai, setDthPhai] = useState(initialValues ? initialValues.DthPhai : '');
  const [dthNS, setDthNS] = useState(initialValues ? initialValues.DthNS : '');
  const [dthNoiSinh, setDthNoiSinh] = useState(initialValues ? initialValues.DthNoiSinh : '');
  const [dthMaKH, setDthMaKH] = useState(initialValues ? initialValues.DthMaKH : '');
  const [dthHocBong, setDthHocBong] = useState(initialValues ? initialValues.DthHocBong : '');
  const [dthDTB, setDthDTB] = useState(initialValues ? initialValues.DthDTB : '');

  useEffect(() => {
    if (initialValues) {
      setDthId(initialValues.id);
      setDthMaSV(initialValues.DthMaSV);
      setDthHoSV(initialValues.DthHoSV);
      setDthTenSV(initialValues.DthTenSV);
      setDthPhai(initialValues.DthPhai);
      setDthNS(initialValues.DthNS);
      setDthNoiSinh(initialValues.DthNoiSinh);
      setDthMaKH(initialValues.DthMaKH);
      setDthHocBong(initialValues.DthHocBong);
      setDthDTB(initialValues.DthDTB);
    }
  }, [initialValues]);

  const handleDthClose = () => {
    onDthClose(false);
  };

  const handleDthSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      DthMaSV: dthMaSV,
      DthHoSV: dthHoSV,
      DthTenSV: dthTenSV,
      DthPhai: dthPhai,
      DthNS: dthNS,
      DthNoiSinh: dthNoiSinh,
      DthMaKH: dthMaKH,
      DthHocBong: dthHocBong,
      DthDTB: dthDTB,
    };

    if (dthId) {
      // Update existing user
      formData.id = dthId;
      await axiosInstance.put(`/${dthId}`, formData);
    } else {
      // Add new user
      await axiosInstance.post("/", formData);
    }

    onDthSubmitForm(false);
  };

  return (
    <div className="">
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text">Mã sinh viên</span>
          <input type="text" className="form-control" value={dthMaSV} onChange={(ev) => setDthMaSV(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Họ</span>
          <input type="text" className="form-control" value={dthHoSV} onChange={(ev) => setDthHoSV(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Tên</span>
          <input type="text" className="form-control" value={dthTenSV} onChange={(ev) => setDthTenSV(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Phái</span>
          <input type="text" className="form-control" value={dthPhai} onChange={(ev) => setDthPhai(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ngày sinh</span>
          <input type="text" className="form-control" value={dthNS} onChange={(ev) => setDthNS(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Nơi sinh</span>
          <input type="text" className="form-control" value={dthNoiSinh} onChange={(ev) => setDthNoiSinh(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Mã khóa học</span>
          <input type="text" className="form-control" value={dthMaKH} onChange={(ev) => setDthMaKH(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Học bổng</span>
          <input type="text" className="form-control" value={dthHocBong} onChange={(ev) => setDthHocBong(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Điểm trung bình</span>
          <input type="text" className="form-control" value={dthDTB} onChange={(ev) => setDthDTB(ev.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={handleDthSubmit}>Ghi lại</button>
        <button className="btn btn-danger" onClick={handleDthClose}>Đóng</button>
      </form>
    </div>
  );
}
