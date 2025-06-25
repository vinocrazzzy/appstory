module.exports = async function (context, req) {
    const { item, timestamp } = req.body;
    context.log(`Download tracked: ${item} at ${timestamp}`);
    
    context.res = {
        status: 200,
        body: "Download logged"
    };
};