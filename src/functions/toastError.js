import toast from "react-hot-toast"

const toastError = (error) => {
    toast.error(
        error?.response?.data?.message
    )
}

export default toastError