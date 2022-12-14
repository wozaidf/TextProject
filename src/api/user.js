import request from './request.js';

export const Login = (data) => request({
    url: '/user/login',
    method: 'post',
    data: data,
    // 将提交的数据转换为x-www-form-urlencoded格式
    headers: { 'Content-Type': "application/x-www-form-urlencoded" }
});

// 注册接口 
export const register = (data) => request({
    url: '/user/register',
    method: 'post',
    data: data,
    headers: { 'Content-Type': "application/x-www-form-urlencoded" }
})

// 获取文件列表的接口
export const getFileList = () => request({
    url: '/file/getFileList',
    method: 'get',
});

// 上传文件的接口
export const uploadFileList = (data) => request({
    url: '/file/uploadFile',
    method: 'post',
    data,
});

// 删除文件接口
// 用路劲传参
export const deleteFile = (id) => request({
    url: `/file/deleteFile/${id}`,
    method: 'delete',
})