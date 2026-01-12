import enquiryModel from '../model/enquiry.js'


export const enquiries = async (req, res) => {
    try {
        const { name, email, number, course } = req.body

        let alldata = await enquiryModel.create({
            name,
            email,
            number,
            course
        })
        res.status(200).json({ message: "submmited" },alldata)
    } catch (error) {
        res.status(501).json(error)
    }
}

export const getEnquiryData = async (req, res) => {
    try {
        let myEquiries = await enquiryModel.find().sort({ createdAt: -1 })
        res.status(200).json(myEquiries)
    } catch (error) {
        res.status(501).status(error)
    }
}