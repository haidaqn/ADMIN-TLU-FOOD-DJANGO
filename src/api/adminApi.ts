import { VoucherItem } from "./../models/Admin"
import { ExpandFood } from "./../models/Topping"
import { PageConfig } from "./../models/Config"
import axiosClient from "./axiosClient"
import axios from "axios"
const adminApi = {
  //done
  getAllProducts(page: PageConfig) {
    const url = `prod/paging-food?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },
  getAllTypeFoods(page: PageConfig) {
    const url = `prod/paging-type-food?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },
  getAllResFoods(page: PageConfig) {
    const url = `prod/paging-res?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },
  getPagingUser(page: PageConfig) {
    const url = `auth/paging-account?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },

  search(param: string | null, apiHandle: string) {
    const url_res = `prod/${apiHandle}?pageIndex=1&pageSize=100`
    return axiosClient.get(url_res)
  },

  getUploadImages(images: FormData) {
    const url = `https://api.cloudinary.com/v1_1/drussspqf/image/upload`
    return axios.post(url, images)
  },

  addFood(
    name: string,
    price: number,
    detail: string,
    imgFood: string,
    typeFoodEntityId: number,
    restaurantEntityId: number,
    nameRestaurantFood: string,
    nameType: string,
    star: number,
    distance: number,
  ) {
    const data = new FormData()
    data.append("createBy", "ADMIN")
    data.append("createAt", new Date().toISOString())
    data.append("detail", detail)
    data.append("foodName", name)
    data.append("imgFood", imgFood)
    data.append("price", price.toString())
    data.append("typeFoodEntityId", typeFoodEntityId.toString())
    data.append("restaurantEntityId ", restaurantEntityId.toString())
    data.append("nameRestaurantFood ", nameRestaurantFood.toString())
    data.append("nameType ", nameType.toString())
    data.append("star ", star.toString())
    data.append("distance ", distance.toString())

    const url = "prod/paging-food"
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  deleteFood(foodArray: Array<number>) {
    const url = "prod/paging-food"
    return axiosClient.delete(url, { data: foodArray })
  },

  updateProduct(
    id: number,
    name: string,
    price: number,
    detail: string,
    imgFood: string,
    typeFoodEntityId: number,
    restaurantEntityId: number,
    nameRestaurantFood: string,
    nameType: string,
    star: number,
    distance: number,
  ) {
    const data = new FormData()
    data.append("createBy", "ADMIN")
    data.append("createAt", new Date().toISOString())
    data.append("detail", detail)
    data.append("foodName", name)
    data.append("price", price.toString())
    data.append("typeFoodEntityId", typeFoodEntityId.toString())
    data.append("restaurantEntityId ", restaurantEntityId.toString())
    data.append("nameRestaurantFood ", nameRestaurantFood.toString())
    data.append("nameType ", nameType.toString())
    data.append("star ", star.toString())
    data.append("distance ", distance.toString())
    data.append("imgFood", imgFood)
    data.append("typeFoodEntityId", String(typeFoodEntityId))
    data.append("restaurantEntityId", String(restaurantEntityId))
    const url = `prod/paging-food/${id}/`
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },

  // đang làm

  addType(imgType: string, nameType: string) {
    const data = new FormData()
    data.append("imgType", imgType)
    data.append("nameType", nameType)
    data.append("create_date", new Date().toISOString())
    const url = "prod/paging-type-food"
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },

  updateType(id: number, nameType: string, imgRes: string) {
    const data = new FormData()
    data.append("id", String(id))
    data.append("nameType", nameType)
    data.append("imgType", imgRes)
    const url = `prod/paging-type-food/${id}/`
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  deleteType(typeArray: Array<number>) {
    const url = "prod/paging-type-food"
    return axiosClient.delete(url, { data: typeArray })
  },

  // chưa done
  getAllVoucher(page: PageConfig) {
    const url = `ADMIN/paging-voucher?pageSize=${page.pageSize}&pageIndex=${page.pageIndex}`
    return axiosClient.post(url)
  },

  addTopping(data: ExpandFood) {
    const url = "ADMIN/add-topping"
    return axiosClient.post(url, data)
  },
  addVoucher(data: VoucherItem) {
    const url = "ADMIN/add-voucher"
    return axiosClient.post(url, data)
  },
  addRestaurant(
    restaurantName: string,
    address: string,
    distance: string,
    detail: string,
    phoneNumber: string,
    supOpen: string,
    supClose: string,
    imgRes: File,
  ) {
    const data = new FormData()
    data.append("restaurantName", restaurantName)
    data.append("address", address)
    data.append("distance", distance)
    data.append("detail", detail)
    data.append("phoneNumber", phoneNumber)
    data.append("timeStart", supOpen)
    data.append("timeClose", supClose)
    data.append("imgRes", imgRes)
    const url = "ADMIN/add-res"
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data", // Thêm đoạn này để đảm bảo dữ liệu được gửi dưới dạng FormData
      },
    })
  },

  addEmployee(
    username: string,
    password: string,
    sdt: string,
    accountName: string,
    imgUser: File,
  ) {
    const url = "ADMIN/MANAGER/add-employee"
    return axiosClient.post(url, {
      username: accountName,
      password: password,
      sdt: sdt,
      accountName: username,
      imgUser: imgUser,
    })
  },

  updateSupplier(
    id: number,
    restaurantName: string,
    address: string,
    distance: string,
    detail: string,
    timeStart: string,
    timeClose: string,
    phoneNumber: string,
    imgRes: File | null,
  ) {
    const data = new FormData()
    data.append("id", String(id))
    data.append("restaurantName", restaurantName)
    data.append("address", address)
    data.append("distance", String(distance))
    data.append("detail", detail)
    data.append("timeStart", timeStart)
    data.append("timeClose", timeClose)
    data.append("phoneNumber", phoneNumber)
    if (imgRes !== null) {
      data.append("imgRes", imgRes)
    }
    const url = "ADMIN/update-res"
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },

  updateVoucher(data: VoucherItem) {
    const url = "ADMIN/update-voucher"
    return axiosClient.put(url, data)
  },
  updateBill(status: string, id: number) {
    const url = `ADMIN/update-bill?orderStatus=${status}&id=${id}`
    return axiosClient.put(url)
  },

  deleteVoucher(foodArray: Array<number>) {
    const url = "ADMIN/delete-voucher"
    return axiosClient.post(url, foodArray)
  },

  deleteStore(storeArray: Array<number>) {
    const url = "ADMIN/delete-res"
    return axiosClient.post(url, storeArray)
  },
  getPagingEmployee(page: PageConfig) {
    const url = `ADMIN/MANAGER/paging-employee?pageSize=${page.pageSize}&pageIndex=${page.pageIndex}`
    return axiosClient.post(url)
  },

  getDetailStore(id: number) {
    const url = `ADMIN/get-detail-res?id=${id}`
    return axiosClient.post(url)
  },
  getDetailBill(id: number) {
    const url = `ADMIN/get-detail-bill?id=${id}`
    return axiosClient.post(url)
  },
  getBill(page: PageConfig, status: string | null) {
    if (status) {
      const url = `ADMIN/get-bill?pageIndex=${page.pageIndex}&pageSize=${page.pageSize}&orderStatus=${status}`
      return axiosClient.post(url)
    }
    const url = `ADMIN/get-bill?pageIndex=${page.pageIndex}&pageSize=${page.pageSize}`
    return axiosClient.post(url)
  },
  getDetailVoucher(id: number) {
    const url = `ADMIN/get-detail-voucher?id=${id}`
    return axiosClient.post(url)
  },
}

export default adminApi
