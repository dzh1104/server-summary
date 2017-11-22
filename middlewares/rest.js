function mapCodeMsg(code) {
    
}

module.exports = {
    ApiError: code => {
        this.code = code || 'internal:unknown_error';

    }
};