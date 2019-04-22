<template>
  <div class="box">
    <div class="inner">
      <span>MM</span>
    </div>
    <div class="inner">
      <span>MM</span>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
}

.box .inner {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 1em;
  font-family: sans-serif;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
}

.box .inner:first-child {
  background-color: indianred;
  color: darkred;
  transform-origin: right;
  transform: perspective(10px) rotateY(-15deg);
}

.box .inner:last-child {
  background-color: lightcoral;
  color: antiquewhite;
  transform-origin: left;
  transform: perspective(10px) rotateY(15deg);
}

.box .inner span {
  position: absolute;
  animation: marquee 5s linear;
}

.box .inner:first-child span {
  animation-delay: 2.5s;
  left: -100%;
}

@keyframes marquee {
  from {
    left: 100%;
  }

  to {
    left: -100%;
  }
}
</style>
