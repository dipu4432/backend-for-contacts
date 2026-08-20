//@desc Get all contacts
//@route GET /api/contacts
//@access Public
export const getContacts = (req, res) => {
    res.status(200).json({
        message: "Get all contacts"
    })
}


//@desc Create a new contact
//@route POST /api/contacts
//@access Public
export const createContact = (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, phone, email } = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({
        message: "Create a new contact"
    })
}


//@desc Get a specific contact
//@route GET /api/contacts/:id
//@access Public
export const getContact = (req, res) => {
    res.status(200).json({
        message: `Get contact for ${req.params.id}`
    })
}


//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
export const updateContact = (req, res) => {
    res.status(200).json({
        message: `Update contact for ${req.params.id}`
    })
}


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
export const deleteContact = (req, res) => {
    res.status(201).json({
        message: `Delete contact for ${req.params.id}`
    })
}

