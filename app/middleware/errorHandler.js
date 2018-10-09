module.exports = (options, app) => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (e) {
            let body = {}, status = 500;
            status = e.status || 500;
            body = e.data || {error: e.message};
            if (status === 422) {
                body = {detail: e.errors};
            }
            ctx.status = status;
            ctx.body = body;
        }
    };
};