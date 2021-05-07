<template>
  <!--            card-->
  <div class="card card-project shadow-sm bg-white">
    <div class="progress">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        style="width: 60%"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <div class="card-body">
      <div class="dropdown card-options">
        <button
          id="project-dropdown-button-1"
          class="btn-options"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="material-icons">more_vert</i>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">Edit</a>
          <a class="dropdown-item" href="#">Share</a>
        </div>
      </div>
      <div class="card-title">
        <a href="#"><h5 data-filter-by="text">New Protocol</h5></a>
      </div>
      <ul class="avatars">
        <li>
          <a href="#" data-toggle="tooltip" title="Kenny">
            <img
              alt="Kenny Tran"
              class="avatar"
              src="~static/protocol/img/avatar-male-6.jpg"
              data-filter-by="alt"
            />
          </a>
        </li>

        <li>
          <a href="#" data-toggle="tooltip" title="Peggy">
            <img
              alt="Peggy Brown"
              class="avatar"
              src="~static/protocol/img/avatar-female-2.jpg"
              data-filter-by="alt"
            />
          </a>
        </li>

        <li>
          <a href="#" data-toggle="tooltip" title="Ravi">
            <img
              alt="Ravi Singh"
              class="avatar"
              src="~static/protocol/img/avatar-male-3.jpg"
              data-filter-by="alt"
            />
          </a>
        </li>
      </ul>
      <div class="card-meta d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <i class="material-icons mr-1">playlist_add_check</i>
          <span class="text-small">6/10</span>
        </div>
        <span class="text-small" data-filter-by="text">Due 4 days</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProtocolCard',
}
</script>

<style scoped>
@import '~static/protocol/css/theme.css';
@import '~static/protocol/css/materialIcon.css';
</style>
