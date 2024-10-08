import { Product } from "../../models/index.js";

export const getProductsByCategoryId = async (req, reply) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ category: categoryId }).select("-category").exec();
        return reply.status(200).send({
            message: "Get products list successfully",
            products
        })
    } catch (error) {
        return reply.status(500).send({ message: "" })
    }
}