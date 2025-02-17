{/* enums don't get read correctly when not initialized with a string */}

enum Roles {
    GUEST = "GUEST",
    HOST = "HOST",
    ADMIN = "ADMIN"
}

export default Roles