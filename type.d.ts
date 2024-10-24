type User = {
    user_id: number | null,
    username: string | null,
    password: string | null,
    phone: string | null,
    image_url: string | null
}
type Product = {
    product_id: number | null,
    title: string | null,
    price: number | null,
    image_url: string | null,
    row_status: boolean | null
}
type Navbar = {
    user: User
}
type WelcomeMessage = {
    name: string
}
type CardProduct = {
    products:Product[]
}
type Logout = {
    modalLogout: boolean,
    handleChangeLogout: any
}
type ImageProduct = {
    image_url: string,
    image_alt: string
}