function CircularBuffer(buf_size) {
  
	var readIndex = 0;
	var writeIndex = 0;
	var buffer = new Array(buf_size);

    function read() {
    	if (isBufferEmpty()) {
    		throw new BufferEmptyException();
    	}
    	var readBuffer = buffer[readIndex];
    	buffer[readIndex] = null;
    	updateReadIndex();
    	return readBuffer;
    };
    function write(write_buffer) {
    	if (!isEmpty(write_buffer)) {
    		if (isBufferFull()) {
    			throw new BufferFullException();
    		}
    		buffer[writeIndex] = write_buffer;
			updateWriteIndex();
    	}
    };
    function forceWrite(write_buffer) {
    	if (!isEmpty(write_buffer)) {
    		buffer[writeIndex] = write_buffer;
			updateWriteIndex();
			updateReadIndex();
    	}
    };
    function clear() {
    	readIndex = 0;
    	writeIndex = 0;
    	buffer = new Array(buf_size);
    };
    function isBufferEmpty() {
		return buffer.every(isEmpty);
	};
	function isEmpty(buffer) {
		return buffer === null || buffer === undefined;
	};
	function isFull(buffer) {
		return !isEmpty(buffer);
	}
	function isBufferFull() {
		return buffer.filter(isFull).length === buf_size;
	};

	function updateReadIndex() {
		readIndex = (readIndex + 1)%buf_size;
	}
	function updateWriteIndex() {
		writeIndex = (writeIndex + 1)%buf_size;
	}

  return {
	read : read,
	write : write,
	forceWrite: forceWrite,
	clear : clear
  };
};

function BufferEmptyException() {
  this.name = "BufferEmptyException";
  this.message = "Empty Buffer.";
};
  
function BufferFullException() {
  this.name = "BufferFullException";
  this.message = "Full Buffer.";
};

module.exports = { 
  circularBuffer: function(buf_size) {
    return new CircularBuffer(buf_size);
  },
  
  bufferEmptyException: function() {
    return new BufferEmptyException();
  },

  bufferFullException: function() {
    return new BufferFullException();
  }  
};