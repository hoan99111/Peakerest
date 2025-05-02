import Pin from "../models/pin.models.js";

export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search;
  const LIMIT = 21;

  const pins = await Pin.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { tags: { $in: [search] } },
    ],
  })
    .limit(LIMIT)
    .skip(LIMIT * pageNumber);

  const hasNextPage = pins.length === LIMIT;

  res
    .status(200)
    .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};
