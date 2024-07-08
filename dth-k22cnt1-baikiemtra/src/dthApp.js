import React, { useEffect, useState } from 'react';
import DthSinhVienList from './Component/dthSinhVienList'; 
import axiosInstance from './api/DthApp'; 
import DthSinhVienAddOrEdit from './Component/DthFormAddorEdit';


export default function DthApp() {
  const [dthListSinhvien, setDthListSinhvien] = useState([]);
  const [dthAddOrEdit, setDthAddOrEdit] = useState(false);
  const [dthSelectedUser, setDthSelectedUser] = useState(null);

  const dthGetAllUser = async () => {
    const dthResponse = await axiosInstance.get("/"); 
    setDthListSinhvien(dthResponse.data);
  }

  useEffect(() => {
    dthGetAllUser();
  }, []);

  const dthHandleAddNew = () => {
    setDthSelectedUser(null);
    setDthAddOrEdit(true);
  };

  const dthHandleClose = () => {
    setDthAddOrEdit(false);
  };

  const dthHandleSubmit = async (formData) => {
    if (formData.id) {
      await axiosInstance.put(`/${formData.id}`, formData);
    } else {
      await axiosInstance.post("/", formData);
    }
    dthGetAllUser();
    setDthAddOrEdit(false);
  };

  const dthHandleEdit = (userId) => {
    const selectedUser = dthListSinhvien.find(user => user.id === userId);
    if (selectedUser) {
      setDthSelectedUser(selectedUser);
      setDthAddOrEdit(true);
    }
  };

  const dthHandleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
      await axiosInstance.delete(`/${userId}`);
      dthGetAllUser();
    }
  };

  return (
    <div className="container border my-3">
    <h1>Làm việc với API</h1>
    <hr />
    <button className="btn btn-primary mb-3" onClick={dthHandleAddNew}>Thêm mới</button>
    {dthAddOrEdit && (
      <DthSinhVienAddOrEdit
        initialValues={dthSelectedUser}
        onDthClose={dthHandleClose}
        onDthSubmitForm={dthHandleSubmit}
      />
    )}
    <DthSinhVienList
      renderDthListUsers={dthListSinhvien}
      handleEdit={dthHandleEdit}
      handleDelete={dthHandleDelete}
    />
  </div>
  );
}
