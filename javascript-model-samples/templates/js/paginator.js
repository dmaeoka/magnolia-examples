var Paginator = function () {

    var itemsPerPage;
    var page = null;
    var itemCount = null;

    this.setPage = function (p) {
        page = p;
    };

    this.getPage = function () {
        return 1 + this.getPageIndex();
    };

    this.getPageIndex = function () {
        var index = Math.max(0, page - 1);
        return itemCount == null ? index : Math.min(index, Math.max(0, this.getPageCount() - 1));
    };

    this.isFirst = function () {
        return this.getPageIndex() == 0;
    };

    this.isLast = function () {
        return itemCount == null ? false : this.getPageIndex() >= this.getPageCount() - 1;
    };

    this.getPageCount = function () {
        return itemCount == null ? null : Math.ceil(itemCount / itemsPerPage);
    };

    this.setItemsPerPage = function (i) {
        itemsPerPage = i;
    };

    this.getItemsPerPage = function () {
        return itemsPerPage;
    };

    this.setItemCount = function (i) {
        itemCount = i == null ? null : Math.max(0, i);
    };

    this.getItemCount = function () {
        return itemCount;
    };

    this.getOffset = function () {
        return this.getPageIndex() * itemsPerPage;
    };

    this.getLength = function () {
        return itemCount == null ? itemsPerPage : Math.min(itemsPerPage, itemCount - this.getPageIndex() * itemsPerPage);
    };
};