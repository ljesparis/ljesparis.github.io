<script>
import { LogoGithub, LogoLinkedin } from '@vicons/ionicons5'
import { defineComponent } from 'vue'

import social from './assets/social'

export default defineComponent({
  components: {
    LogoGithub,
    LogoLinkedin
  },
  setup() {
    function onLinkedinClick() {
      window.open(social.linkedinUrl);
    }

    function onGithubClick() {
      window.open(social.githubUrl);
    }

    return {
      onLinkedinClick, onGithubClick
    }
  }
})
</script>

<template>
  <div class="header">
    <n-grid cols="1 m:2" responsive="screen">
      <n-gi>
        <div class="header__title">
          <p>ljesparis</p>
        </div>
      </n-gi>
      <n-gi>
        <div class="header__extra">
          <n-button tertiary circle style="color:white" @click="onGithubClick()">
            <template #icon>
              <n-icon size="32">
                <logo-github />
              </n-icon>
            </template>
          </n-button>
          <n-button tertiary circle style="color:white" @click="onLinkedinClick()">
            <template #icon>
              <n-icon size="32">
                <logo-linkedin />
              </n-icon>
            </template>
          </n-button>
        </div>
      </n-gi>
    </n-grid>
  </div>
  <div class="body">
    <p>I'm <u>Leonardo</u>, a python backend developer. at the beginning of my career I started developing applications
      on the frontend (only 1 year and 9 months) and ended up moving to the backend. In the last
      almost three years, I have focused on working with companies that care about clean code, applying the SOLID
      principles, TDD,
      CLEAN
      ARCHITECTURE and good practices.</p>
  </div>
</template>

<style scoped>
.header {
  padding-top: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .n-grid {
  max-width: 58%;
}

.header__title {
  display: flex;
  justify-content: start;
}

.header__title p {
  font-size: 3.6em;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.header__extra {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
}

.header__extra button:last-child {
  margin-left: 1em;
}

.body {
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.body p {
  font-size: 2em;
}

@media (max-width: 1023px) {

  .header .n-grid {
    max-width: 100%;
  }

  .header__title {
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .header__extra {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
}
</style>
