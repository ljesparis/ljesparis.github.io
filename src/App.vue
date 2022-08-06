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
  <n-grid cols="1 m:2" responsive="screen">
    <n-gi class="header__title">
      <p>ljesparis</p>
    </n-gi>
    <n-gi class="header__extra">
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
    </n-gi>
    <n-grid-item class="body__content">
      <p>I'm <u>Leonardo</u>, a python backend developer. at the beginning of my career I started developing
        applications
        on the frontend (only 1 year and 9 months) and ended up moving to the backend. In the last
        almost three years, I have focused on working with companies that care about clean code, applying the SOLID
        principles, TDD,
        CLEAN
        ARCHITECTURE and good practices.</p>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
.n-grid {
  margin-top: 2.4em;
}

.header__title,
.header__extra {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
}

.header__title p {
  font-size: 3.6em;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.header__extra button:last-child {
  margin-left: 1em;
}

.body__content {
  grid-column: span 1 / span 1;
  margin-left: 0;
}

.body__content p {
  padding: 0 2em 0 2em;
  font-size: 24px;
  margin-top: 3em;
  text-align: justify;
}


@media (min-width: 1023px) {

  .body__content {
    width: 100%;
    grid-column: span 1 / span 1;
    margin-left: calc(48.4% + 0px);
  }

  .body__content p {
    padding: 0;
  }
}
</style>
