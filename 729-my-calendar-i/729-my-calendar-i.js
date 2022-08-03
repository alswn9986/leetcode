
var MyCalendar = function() {
    this.head = {start:-Infinity, end:-Infinity, prev: null};
    this.tail = {start:Infinity, end:Infinity, next: null};
    this.head.next = this.tail;
    this.tail.prev = this.head;
    // this.deque
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let pointer = this.tail;
    
    while(pointer.start > start) {
        pointer = pointer.prev;
    }
    if(pointer.start === start) return false;
    if(pointer.end > start) return false;
    if(pointer.next.start < end) return false;
    
    
    let node = {
        start,
        end,
        next: pointer.next,
        prev: pointer,
    }
    
    pointer.next.prev = node;
    pointer.next = node;
    
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */