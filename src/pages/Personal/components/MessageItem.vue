<template>
  <div id="app">
    <div class="message_container">
      <div class="message_container_content">
        <div class="message_container_content_item">
          <div class="item_header">
            <p class="item_header_title">
              xx
            </p>
            <p class="item_header_time">
              xx
            </p>
          </div>
          <div class="item_time">
            xx
          </div>
          <div class="item_content">
            xxx
          </div>
          <div class="item_btn">
            收起
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message_container {
  height: 100%;
  padding: 0 4vw;
  background-color: #f4f4f4;

  &_content {
    padding: 4vw 0;

    &_item {
      height: 15.2vw;
      padding: 4vw 4vw 0;
      margin-bottom: 4vw;
      overflow: hidden;
      background-color: #fff;
      border-radius: 1.33333vw;
    }
  }
}

.item_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4vw;

  &_title {
    font-size: 4vw;
    font-weight: 700;
    color: #282828;
  }

  &_time {
    color: #666;
  }
}

.item_time {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  color: #868686;
  text-align: right;
}

.item_content {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  line-height: 1.8;
  text-indent: 2em;
}

.item_btn {
  font-size: 3.2vw;
  line-height: 12vw;
  color: #868686;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
