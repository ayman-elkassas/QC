<template>
  <!-- BEGIN: Main Menu-->
  <!--  background="#283046"-->
  <!--  text-white-->
  <div>
    <vs-sidebar
      v-model="active"
      background="#283046"
      text-white
      color="#7367F0"
      style="border-radius: 0px"
      open
      not-shadow
      :reduce="flag"
    >
      <template #logo>
        <nuxt-link to="/">
          <img src="~assets/dashboard/logo/logo.png" alt="avatar" />
        </nuxt-link>
      </template>

      <div v-for="item in menuContainer" :key="item.id">

        <vs-sidebar-item
          v-if="!item.sub_items"
          :to="item.route!==undefined?item.route:'#'">
          <template #icon>
            <span v-html="item.icon"></span>
          </template>
          {{item.title}}
        </vs-sidebar-item>

        <vs-sidebar-group v-else>
          <template #header>
            <vs-sidebar-item arrow>

              <template #icon>
                <span v-html="item.icon"></span>
              </template>

              {{ item.title }}
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item v-for="sub in item.sub_items" :to="sub.route" :key="sub.id">
            <template #icon>
              <span v-html="sub.icon"></span>
            </template>
            {{ sub.title }}
          </vs-sidebar-item>
        </vs-sidebar-group>
      </div>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge badge-color="success">
            <img
              src="~assets/dashboard/app-assets/images/avatars/2.png"
              alt=""
            />
          </vs-avatar>
          <vs-avatar circle color="#fff" @click="collapse()">
            <i class="bx bx-toggle-left"></i>
          </vs-avatar>
        </vs-row>
      </template>

    </vs-sidebar>


    <!--      <vs-sidebar-group>-->
<!--        <template #header>-->
<!--          <vs-sidebar-item arrow>-->
<!--            <template #icon>-->
<!--              <i class="bx bx-group"></i>-->
<!--            </template>-->
<!--            Accounts-->
<!--          </vs-sidebar-item>-->
<!--        </template>-->

<!--        <vs-sidebar-item id="admin">-->
<!--          <template #icon>-->
<!--            <i class="bx bx-user"></i>-->
<!--          </template>-->
<!--          Admin Account-->
<!--        </vs-sidebar-item>-->
<!--        <vs-sidebar-item id="user">-->
<!--          <template #icon>-->
<!--            <i class="bx bx-user-circle"></i>-->
<!--          </template>-->
<!--          User Account-->
<!--        </vs-sidebar-item>-->
<!--      </vs-sidebar-group>-->
<!--      <vs-sidebar-item id="protocol" to="/protocol">-->
<!--        <template #icon>-->
<!--          <i class="bx bx-grid-alt"></i>-->
<!--        </template>-->
<!--        Protocols-->
<!--      </vs-sidebar-item>-->
<!--      <vs-sidebar-item id="template" to="/template/">-->
<!--        <template #icon>-->
<!--          <i class="bx bx-file"></i>-->
<!--        </template>-->
<!--        Templates-->
<!--      </vs-sidebar-item>-->
<!--      <vs-sidebar-group>-->
<!--        <template #header>-->
<!--          <vs-sidebar-item arrow>-->
<!--            <template #icon>-->
<!--              <i class="bx bx-code-alt"></i>-->
<!--            </template>-->
<!--            Coding-->
<!--          </vs-sidebar-item>-->
<!--        </template>-->

<!--        <vs-sidebar-item id="github">-->
<!--          <template #icon>-->
<!--            <i class="bx bxl-github"></i>-->
<!--          </template>-->
<!--          Github-->
<!--        </vs-sidebar-item>-->
<!--        <vs-sidebar-item id="codepen">-->
<!--          <template #icon>-->
<!--            <i class="bx bxl-codepen"></i>-->
<!--          </template>-->
<!--          Codepen-->
<!--        </vs-sidebar-item>-->
<!--        <vs-sidebar-item id="discord">-->
<!--          <template #icon>-->
<!--            <i class="bx bxl-discord"></i>-->
<!--          </template>-->
<!--          Discord-->
<!--        </vs-sidebar-item>-->
<!--        <vs-sidebar-item id="Javascript">-->
<!--          <template #icon>-->
<!--            <i class="bx bxl-javascript"></i>-->
<!--          </template>-->
<!--          Javascript-->
<!--        </vs-sidebar-item>-->
<!--        <vs-sidebar-item id="git">-->
<!--          <template #icon>-->
<!--            <i class="bx bxl-git"></i>-->
<!--          </template>-->
<!--          Git-->
<!--        </vs-sidebar-item>-->
<!--      </vs-sidebar-group>-->
<!--      <vs-sidebar-item id="donate">-->
<!--        <template #icon>-->
<!--          <i class="bx bxs-donate-heart"></i>-->
<!--        </template>-->
<!--        Donate-->
<!--      </vs-sidebar-item>-->
<!--      <vs-sidebar-item id="drink">-->
<!--        <template #icon>-->
<!--          <i class="bx bx-drink"></i>-->
<!--        </template>-->
<!--        Drink-->
<!--      </vs-sidebar-item>-->
<!--      <vs-sidebar-item id="shopping">-->
<!--        <template #icon>-->
<!--          <i class="bx bxs-shopping-bags"></i>-->
<!--        </template>-->
<!--        Shopping-->
<!--      </vs-sidebar-item>-->
<!--      <vs-sidebar-item id="chat">-->
<!--        <template #icon>-->
<!--          <i class="bx bx-chat"></i>-->
<!--        </template>-->
<!--        Chat-->
<!--      </vs-sidebar-item>-->


  </div>

  <!-- END: Main Menu-->
</template>

<script src="./_index.js"></script>

<style scoped></style>
