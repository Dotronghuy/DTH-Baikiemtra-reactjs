import React from 'react';

export default function DthSinhVienList({ renderDthListUsers, handleEdit, handleDelete }) {

  const handleDeleteSV = (id) => {
    handleDelete(id);
  };

  const handleEditSV = (id) => {
    handleEdit(id);
  };

  let dthElementUser = renderDthListUsers.map((dthUser, index) => {
    return (
      <tr key={dthUser.id}>
        <td>{dthUser.id}</td>
        <td>{dthUser.DthMaSV}</td>
        <td>{dthUser.DthHoSV}</td>
        <td>{dthUser.DthTenSV}</td>
        <td>{dthUser.DthPhai}</td>
        <td>{dthUser.DthNS}</td>
        <td>{dthUser.DthNoiSinh}</td>
        <td>{dthUser.DthMaKH}</td>
        <td>{dthUser.DthHocBong}</td>
        <td>{dthUser.DthDTB}</td>
        <td>
          <button type='button' className='btn btn-danger mx-3' onClick={() => handleDeleteSV(dthUser.id)}>Xóa</button>
          <button type='button' className='btn btn-warning' onClick={() => handleEditSV(dthUser.id)}>Sửa</button>
        </td>
      </tr>
    )
  });

  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã SV</th>
              <th>Họ</th>
              <th>Tên</th>
              <th>Phái</th>
              <th>Ngày sinh</th>
              <th>Nơi sinh</th>
              <th>Mã khóa học</th>
              <th>Học bổng</th>
              <th>ĐTB</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {dthElementUser}
          </tbody>
        </table>
      </div>
    </div>
  );
}
