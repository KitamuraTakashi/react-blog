import {NextApiRequest, NextApiResponse} from "next";

/**
 *
 * @param _
 * @param response
 */
export default (_: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json({text: 'Hello'})
}