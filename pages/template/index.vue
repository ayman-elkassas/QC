<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div
            id="tasks"
            class="tab-pane fade show active"
            role="tabpanel"
            data-filter-list="card-list-body"
          >
            <div class="row content-list-head">
              <div class="col-auto">
                <h3>Templates</h3>
                <button
                  class="btn btn-round"
                  data-toggle="modal"
                  data-target="#task-add-modal"
                >
                  <i class="material-icons">add</i>
                </button>
              </div>
              <form class="col-md-auto">
                <div class="input-group input-group-round">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">filter_list</i>
                    </span>
                  </div>
                  <input
                    type="search"
                    class="form-control filter-list-input"
                    placeholder="Filter tasks"
                    aria-label="Filter Tasks"
                  />
                </div>
              </form>
            </div>
            <!--end of content list head-->
            <div class="content-list-body">
              <div class="card-list">
                <div class="card-list-head">
                  <h6>Evaluation</h6>
                  <div class="dropdown">
                    <button
                      id="cardlist-dropdown-button-1"
                      class="btn-options"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Rename</a>
                      <a class="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div class="card-list-body">
                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 75%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Client objective meeting
                          </h6></a
                        >
                        <span class="text-small">Today</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kenny">
                              <img
                                alt="Kenny Tran"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-6.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img
                                alt="David Whittaker"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-4.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Sally">
                              <img
                                alt="Sally Harper"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-3.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Kristina">
                              <img
                                alt="Kristina Van Der Stroem"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-4.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img
                                alt="Claire Connors"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-1.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img
                                alt="Marcus Simmons"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-1.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>3/4</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-1"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 20%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Target market trend analysis
                          </h6></a
                        >
                        <span class="text-small">5 days</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Peggy">
                              <img
                                alt="Peggy Brown"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-2.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img
                                alt="David Whittaker"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-4.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>2/10</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-2"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 0%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Assemble Outcomes Report for client
                          </h6></a
                        >
                        <span class="text-small">7 days</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img
                                alt="Marcus Simmons"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-1.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img
                                alt="Claire Connors"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-1.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img
                                alt="David Whittaker"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-4.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>0/6</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-3"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-list">
                <div class="card-list-head">
                  <h6>Ideation</h6>
                  <div class="dropdown">
                    <button
                      id="cardlist-dropdown-button-2"
                      class="btn-options"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Rename</a>
                      <a class="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div class="card-list-body">
                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Create brand mood boards
                          </h6></a
                        >
                        <span class="text-small">14 days</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Sally">
                              <img
                                alt="Sally Harper"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-3.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img
                                alt="Claire Connors"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-1.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>1/4</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-4"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 0%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Produce broad concept directions
                          </h6></a
                        >
                        <span class="text-small">21 days</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Peggy">
                              <img
                                alt="Peggy Brown"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-2.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img
                                alt="David Whittaker"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-4.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Ravi">
                              <img
                                alt="Ravi Singh"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-3.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Sally">
                              <img
                                alt="Sally Harper"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-3.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>0/5</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-5"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 0%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Present concepts and establish direction
                          </h6></a
                        >
                        <span class="text-small">28 days</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kristina">
                              <img
                                alt="Kristina Van Der Stroem"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-4.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Peggy">
                              <img
                                alt="Peggy Brown"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-2.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Ravi">
                              <img
                                alt="Ravi Singh"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-3.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>0/3</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-6"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-list">
                <div class="card-list-head">
                  <h6>Design</h6>
                  <div class="dropdown">
                    <button
                      id="cardlist-dropdown-button-3"
                      class="btn-options"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Rename</a>
                      <a class="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div class="card-list-body">
                  <div class="card card-task">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 0%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="card-body">
                      <div class="card-title">
                        <a href="#"
                          ><h6 data-filter-by="text">
                            Produce realised brand package
                          </h6></a
                        >
                        <span class="text-small">Unscheduled</span>
                      </div>
                      <div class="card-meta">
                        <ul class="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img
                                alt="Marcus Simmons"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-1.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img
                                alt="Harry Xai"
                                class="avatar"
                                src="~static/protocol/img/avatar-male-2.jpg"
                              />
                            </a>
                          </li>

                          <li>
                            <a href="#" data-toggle="tooltip" title="Kristina">
                              <img
                                alt="Kristina Van Der Stroem"
                                class="avatar"
                                src="~static/protocol/img/avatar-female-4.jpg"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="d-flex align-items-center">
                          <i class="material-icons">playlist_add_check</i>
                          <span>-/-</span>
                        </div>
                        <div class="dropdown card-options">
                          <button
                            id="task-dropdown-button-7"
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Mark as done</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end of content list body-->
            </div>
            <!--end of content list-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'dashboard/home',
}
</script>

<style scoped>
@import '~static/protocol/css/theme.css';
@import '~static/protocol/css/materialIcon.css';
</style>
