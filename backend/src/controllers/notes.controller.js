import { databases, ID ,Query } from "../config/appwrite.js";
export const addNote = async (req, res) => {
    try {
        const { title, description, color, user } = req.body;
        console.log(user)
        // Validate required fields
        if (!title || !description || !color) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        } else if (!user) {
            return res.status(400).json({
                success: false,
                message: "User is required"
            });
        }

        // Create note document
        const note = await databases.createDocument(
            process.env.DATABASE_ID,
            process.env.COLLECTION_ID,
            ID.unique(),
            {
                title,
                description,
                color,
                user
            }
        );

        return res.status(201).json({
            success: true,
            message: "Note added successfully",
            note
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getNotes = async (req, res) => {
    try {
        const notes = await databases.listDocuments(process.env.DATABASE_ID, process.env.COLLECTION_ID, [
            Query.equal('user', req.query.userid)
        ])

        return res.status(200).json({
            success: true,
            notes
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    const note = await databases.deleteDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, id)
    return res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    })
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, description, color } = req.body;
    const note = await databases.updateDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, id, { title, description, color })
    return res.status(200).json({
        success: true,
        note
    })
}

