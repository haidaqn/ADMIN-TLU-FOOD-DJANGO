import adminApi from "@/api/adminApi"
import foodsApis from "@/api/foodsApi"
import {
  ArrowBackIosNew,
  CloudUpload,
  Delete,
  Replay,
  Visibility,
} from "@mui/icons-material"
import {
  Backdrop,
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Paper,
  Stack,
} from "@mui/material"
import { useSnackbar } from "notistack"
import React from "react"
import { useNavigate } from "react-router-dom"


interface TypeFood {
  id: number
  nameType: string
  imgType: string
  status: boolean
}

const UpdateType = ({ id }: { id: string }) => {
  const [file, setFile] = React.useState<File | null>()
  const [type, setType] = React.useState<string>("")
  const imgRef = React.useRef<HTMLInputElement | null>(null)
  const [openBackDrop, setOpenBackDrop] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const [images, setImages] = React.useState<string>("")
  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target
    if (inputElement.files) {
      const images = new FormData()
      const selectedFiles = inputElement.files
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i]
        images.append("file", file)
        images.append("upload_preset", "oksl1k1o")
        try {
          const response = await adminApi.getUploadImages(images)
          if (response.status === 200) {
            setImages(response.data.secure_url)
          }
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  const handleImageClick = () => {
    if (imgRef.current !== null) {
      imgRef.current.click()
    }
  }
  const [imagePreview, setImagePreview] = React.useState<string | null>(null)
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0]

    if (selectedImage && event.target.files) {
      setFile(event.target.files[0])
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(selectedImage)
    }
  }
  const handlePushProduct = () => {
    async function uploadImage() {
      try {
        if (images) {
          await adminApi.updateType(+id, type, images)
        }
        enqueueSnackbar("Sửa loại thành công", { variant: "success" })
      } catch (error) {
        console.log(error)
        enqueueSnackbar("Sửa loại thất bại", { variant: "error" })
      }
    }
    uploadImage()
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const response = (await foodsApis.getDetailType(
        +id,
      )) as unknown as TypeFood
      setType(response.nameType)
      setImages(response.imgType)
    }
    fetchData()
  }, [])

  const navigate = useNavigate()

  return (
    <Box sx={{ height: "100%" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          p: "10px",
          boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.2)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Button
          size="small"
          startIcon={<ArrowBackIosNew fontSize="small" />}
          onClick={() => {
            navigate("/admin/type")
          }}
          variant="contained"
          sx={{ mr: "10px", textTransform: "revert" }}
        >
          Loại sản phẩm
        </Button>
        <IconButton onClick={handlePushProduct} size="small" sx={{ mr: "5px" }}>
          <CloudUpload fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ mr: "5px" }}>
          <Replay fontSize="small" />
        </IconButton>
      </Stack>
      <Box
        sx={{
          background: "rgb(240, 242, 245)",
          p: "10px",
          height: "calc(100% - 51px)",
        }}
        className="overflow-x-hidden overflow-y-auto"
      >
        <Grid sx={{ width: "100%", height: "100%" }} container spacing={2}>
          <Grid item xs={8}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "rgb(240, 242, 245)",
                p: "10px",
              }}
            >
              <p className="font-medium text-lg mb-2">Sửa loại sản phẩm mới</p>
              <div className="border   bg-white rounded-md border-gray-300 p-[15px]">
                <div className="flex w-[100%]">
                  <div className="flex-1 mr-[20px]">
                    <label className="font-medium text-md block">
                      Tên loại sản phẩm
                    </label>
                    <Input
                      fullWidth
                      sx={{ height: "50px", fontSize: "25px", p: 0 }}
                      placeholder="VD: Bún, đồ uống..."
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                    />
                  </div>
                  <div
                    onClick={handleImageClick}
                    className="w-[150px] relative h-[150px] cursor-pointer border"
                  >
                    {images ? (
                      <>
                        <Backdrop
                          sx={{ zIndex: "100" }}
                          open={openBackDrop}
                          onClick={() => setOpenBackDrop(false)}
                        >
                          <img
                            className="w-[400px] object-contain"
                            src={images}
                            alt="Preview"
                          />
                        </Backdrop>
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            "&:hover .tool-img": {
                              display: "flex !important",
                            },
                          }}
                        >
                          <img
                            className="w-[100%] h-[100%] object-cover"
                            src={images}
                            alt="Preview"
                          />
                          <div className="absolute tool-img top-0 left-0 hidden items-center justify-center w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-10">
                            <IconButton onClick={() => setOpenBackDrop(true)}>
                              <Visibility htmlColor="white" />
                            </IconButton>
                            <IconButton onClick={() => setImages("")}>
                              <Delete htmlColor="white" />
                            </IconButton>
                          </div>
                        </Box>
                      </>
                    ) : (
                      <img
                        className="w-[100%] h-[100%] object-cover"
                        src="/assets/camera_add.png"
                        alt="Add Image"
                      />
                    )}
                    <input
                      ref={imgRef}
                      hidden={true}
                      type="file"
                      id="imageInput"
                      onChange={(e) => handleFiles(e)}
                      name="imageInput"
                      accept="image/png, image/jpeg"
                    ></input>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={1}
              sx={{
                width: "100%",
                height: "95%",
                borderRadius: "8px",
                p: "10px",
              }}
            >
              Logcat
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default UpdateType
