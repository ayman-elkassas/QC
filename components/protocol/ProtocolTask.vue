<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="page-header" style="padding-top: 0px">
          <p class="lead">
            Assemble three distinct mood boards for client consideration
          </p>
          <div class="d-flex align-items-center">
            <ul class="avatars">
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Claire Connors"
                >
                  <img
                    alt="Claire Connors"
                    class="avatar"
                    src="~static/protocol/img/avatar-female-1.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Marcus Simmons"
                >
                  <img
                    alt="Marcus Simmons"
                    class="avatar"
                    src="~static/protocol/img/avatar-male-1.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Peggy Brown"
                >
                  <img
                    alt="Peggy Brown"
                    class="avatar"
                    src="~static/protocol/img/avatar-female-2.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Harry Xai"
                >
                  <img
                    alt="Harry Xai"
                    class="avatar"
                    src="~static/protocol/img/avatar-male-2.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Sally Harper"
                >
                  <img
                    alt="Sally Harper"
                    class="avatar"
                    src="~static/protocol/img/avatar-female-3.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Ravi Singh"
                >
                  <img
                    alt="Ravi Singh"
                    class="avatar"
                    src="~static/protocol/img/avatar-male-3.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Kristina Van Der Stroem"
                >
                  <img
                    alt="Kristina Van Der Stroem"
                    class="avatar"
                    src="~static/protocol/img/avatar-female-4.jpg"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="David Whittaker"
                >
                  <img
                    alt="David Whittaker"
                    class="avatar"
                    src="~static/protocol/img/avatar-male-4.jpg"
                  />
                </a>
              </li>
            </ul>
            <button
              class="btn btn-round flex-shrink-0"
              data-toggle="modal"
              data-target="#user-manage-modal"
            >
              <i class="material-icons">add</i>
            </button>
          </div>
          <div>
            <div class="progress">
              <div class="progress-bar bg-success" style="width: 42%"></div>
            </div>
            <div class="d-flex justify-content-between text-small">
              <div class="d-flex align-items-center">
                <i class="material-icons">playlist_add_check</i>
                <span>3/7</span>
              </div>
              <span>Due 14 days</span>
            </div>
          </div>
        </div>
        <ul class="nav nav-tabs nav-fill" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#task"
              role="tab"
              aria-controls="task"
              aria-selected="true"
              >Task</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#files"
              role="tab"
              aria-controls="files"
              aria-selected="false"
              >Files</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#activity"
              role="tab"
              aria-controls="activity"
              aria-selected="false"
              >Activity</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <div id="task" class="tab-pane fade show active" role="tabpanel">
            <div class="content-list" data-filter-list="checklist">
              <div class="row content-list-head">
                <div class="col-auto">
                  <h3>Checklist</h3>
                  <button
                    class="btn btn-round flex-shrink-0"
                    data-toggle="modal"
                    data-target="#task-edit-modal"
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
                      placeholder="Filter checklist"
                      aria-label="Filter checklist"
                    />
                  </div>
                </form>
              </div>
              <!--end of content list head-->
              <div class="content-list-body">
                <form class="checklist">
                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-1"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-1"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Create boards in Matboard"
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>

                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-2"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-2"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Invite team to boards"
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>

                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-3"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-3"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Identify three distinct aesthetic styles for boards"
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>

                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-4"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-4"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Add aesthetic style descriptions as notes"
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>

                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-5"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-5"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Assemble boards using inspiration from Dribbble, Land Book, Nicely Done etc."
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>

                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-6"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-6"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Gather feedback from project team"
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>

                  <div class="row">
                    <div class="form-group col">
                      <span class="checklist-reorder">
                        <i class="material-icons">reorder</i>
                      </span>
                      <div class="custom-control custom-checkbox col">
                        <input
                          id="checklist-item-7"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="checklist-item-7"
                        ></label>
                        <div>
                          <input
                            type="text"
                            placeholder="Checklist item"
                            value="Invite clients to board before next concept meeting"
                            data-filter-by="value"
                          />
                          <div class="checklist-strikethrough"></div>
                        </div>
                      </div>
                    </div>
                    <!--end of form group-->
                  </div>
                </form>
                <div class="drop-to-delete">
                  <div class="drag-to-delete-title">
                    <i class="material-icons">delete</i>
                  </div>
                </div>
              </div>
              <!--end of content list body-->
            </div>
            <!--end of content list-->
          </div>
          <!--end of tab-->
          <div
            id="files"
            class="tab-pane fade"
            role="tabpanel"
            data-filter-list="dropzone-previews"
          >
            <div class="content-list">
              <div class="row content-list-head">
                <div class="col-auto">
                  <h3>Files</h3>
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
                      placeholder="Filter files"
                      aria-label="Filter Tasks"
                    />
                  </div>
                </form>
              </div>
              <!--end of content list head-->
              <div class="content-list-body">
                <ul class="d-none dz-template">
                  <li class="list-group-item dz-preview dz-file-preview">
                    <div class="media align-items-center dz-details">
                      <ul class="avatars">
                        <li>
                          <div class="avatar bg-primary dz-file-representation">
                            <i class="material-icons">attach_file</i>
                          </div>
                        </li>
                        <li>
                          <img
                            alt="David Whittaker"
                            src="~static/protocol/img/avatar-male-4.jpg"
                            class="avatar"
                            data-title="David Whittaker"
                            data-toggle="tooltip"
                          />
                        </li>
                      </ul>
                      <div
                        class="media-body d-flex justify-content-between align-items-center"
                      >
                        <div class="dz-file-details">
                          <a href="#" class="dz-filename">
                            <span data-dz-name></span>
                          </a>
                          <br />
                          <span class="text-small dz-size" data-dz-size></span>
                        </div>
                        <img
                          alt="Loader"
                          src="~static/protocol/img/loader.svg"
                          class="dz-loading"
                        />
                        <div class="dropdown">
                          <button
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a
                              class="dropdown-item text-danger"
                              href="#"
                              data-dz-remove
                              >Delete</a
                            >
                          </div>
                        </div>
                        <button
                          class="btn btn-danger btn-sm dz-remove"
                          data-dz-remove
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div class="progress dz-progress">
                      <div
                        class="progress-bar dz-upload"
                        data-dz-uploadprogress
                      ></div>
                    </div>
                  </li>
                </ul>
                <form
                  class="dropzone"
                  action="https://mediumra.re/dropzone/upload.php"
                >
                  <span class="dz-message"
                    >Drop files here or click here to upload</span
                  >
                </form>

                <ul
                  class="list-group list-group-activity dropzone-previews flex-column-reverse"
                >
                  <li class="list-group-item">
                    <div class="media align-items-center">
                      <ul class="avatars">
                        <li>
                          <div class="avatar bg-primary">
                            <i class="material-icons">insert_drive_file</i>
                          </div>
                        </li>
                        <li>
                          <img
                            alt="Peggy Brown"
                            src="~static/protocol/img/avatar-female-2.jpg"
                            class="avatar"
                            data-title="Peggy Brown"
                            data-toggle="tooltip"
                            data-filter-by="data-title"
                          />
                        </li>
                      </ul>
                      <div
                        class="media-body d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <a href="#" data-filter-by="text"
                            >client-questionnaire</a
                          >
                          <br />
                          <span class="text-small" data-filter-by="text"
                            >48kb Text Doc</span
                          >
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <div class="media align-items-center">
                      <ul class="avatars">
                        <li>
                          <div class="avatar bg-primary">
                            <i class="material-icons">folder</i>
                          </div>
                        </li>
                        <li>
                          <img
                            alt="Harry Xai"
                            src="~static/protocol/img/avatar-male-2.jpg"
                            class="avatar"
                            data-title="Harry Xai"
                            data-toggle="tooltip"
                            data-filter-by="data-title"
                          />
                        </li>
                      </ul>
                      <div
                        class="media-body d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <a href="#" data-filter-by="text">moodboard_images</a>
                          <br />
                          <span class="text-small" data-filter-by="text"
                            >748kb ZIP</span
                          >
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <div class="media align-items-center">
                      <ul class="avatars">
                        <li>
                          <div class="avatar bg-primary">
                            <i class="material-icons">image</i>
                          </div>
                        </li>
                        <li>
                          <img
                            alt="Ravi Singh"
                            src="~static/protocol/img/avatar-male-3.jpg"
                            class="avatar"
                            data-title="Ravi Singh"
                            data-toggle="tooltip"
                            data-filter-by="data-title"
                          />
                        </li>
                      </ul>
                      <div
                        class="media-body d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <a href="#" data-filter-by="text"
                            >possible-hero-image</a
                          >
                          <br />
                          <span class="text-small" data-filter-by="text"
                            >1.2mb JPEG image</span
                          >
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <div class="media align-items-center">
                      <ul class="avatars">
                        <li>
                          <div class="avatar bg-primary">
                            <i class="material-icons">insert_drive_file</i>
                          </div>
                        </li>
                        <li>
                          <img
                            alt="Claire Connors"
                            src="~static/protocol/img/avatar-female-1.jpg"
                            class="avatar"
                            data-title="Claire Connors"
                            data-toggle="tooltip"
                            data-filter-by="data-title"
                          />
                        </li>
                      </ul>
                      <div
                        class="media-body d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <a href="#" data-filter-by="text"
                            >LandingPrototypes</a
                          >
                          <br />
                          <span class="text-small" data-filter-by="text"
                            >415kb Sketch Doc</span
                          >
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <div class="media align-items-center">
                      <ul class="avatars">
                        <li>
                          <div class="avatar bg-primary">
                            <i class="material-icons">insert_drive_file</i>
                          </div>
                        </li>
                        <li>
                          <img
                            alt="David Whittaker"
                            src="~static/protocol/img/avatar-male-4.jpg"
                            class="avatar"
                            data-title="David Whittaker"
                            data-toggle="tooltip"
                            data-filter-by="data-title"
                          />
                        </li>
                      </ul>
                      <div
                        class="media-body d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <a href="#" data-filter-by="text"
                            >Branding-Proforma</a
                          >
                          <br />
                          <span class="text-small" data-filter-by="text"
                            >15kb Text Document</span
                          >
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn-options"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--end of content list-->
          </div>
          <div
            id="activity"
            class="tab-pane fade"
            role="tabpanel"
            data-filter-list="list-group-activity"
          >
            <div class="content-list">
              <div class="row content-list-head">
                <div class="kanban-board container-fluid mt-lg-3">
                  <div class="kanban-col">
                    <div class="card-list">
                      <div class="card-list-header">
                        <h6>Backlog</h6>
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
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive List</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-list-body">
                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-13"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>A/B testing</h6></a
                              >
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-14"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>Email template</h6></a
                              >
                            </div>

                            <ul class="avatars">
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
                            </ul>

                            <div
                              class="card-meta d-flex justify-content-between"
                            >
                              <div class="d-flex align-items-center">
                                <i class="material-icons">playlist_add_check</i>
                                <span>-/-</span>
                              </div>

                              <span class="text-small">Unscheduled</span>
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-15"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>Adwords</h6></a
                              >
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-16"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>DNS changeover</h6></a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-list-footer">
                        <button class="btn btn-link btn-sm text-small">
                          Add task
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="kanban-col">
                    <div class="card-list">
                      <div class="card-list-header">
                        <h6>Waiting</h6>
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
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item text-danger" href="#"
                              >Archive List</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-list-body">
                        <div class="card card-kanban">
                          <div class="progress">
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              style="width: 12%"
                              aria-valuenow="12"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-9"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>HTML / CSS templates</h6></a
                              >
                            </div>

                            <ul class="avatars">
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
                                <a href="#" data-toggle="tooltip" title="Harry">
                                  <img
                                    alt="Harry Xai"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-male-2.jpg"
                                  />
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Claire"
                                >
                                  <img
                                    alt="Claire Connors"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-female-1.jpg"
                                  />
                                </a>
                              </li>
                            </ul>

                            <div
                              class="card-meta d-flex justify-content-between"
                            >
                              <div class="d-flex align-items-center">
                                <i class="material-icons">playlist_add_check</i>
                                <span>1/8</span>
                              </div>

                              <span class="text-small">Due 10 days</span>
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-10"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>Photography</h6></a
                              >
                            </div>

                            <ul class="avatars">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Kerri-Anne"
                                >
                                  <img
                                    alt="Kerri-Anne Banks"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-female-5.jpg"
                                  />
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Masimba"
                                >
                                  <img
                                    alt="Masimba Sibanda"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-male-5.jpg"
                                  />
                                </a>
                              </li>
                            </ul>

                            <div
                              class="card-meta d-flex justify-content-between"
                            >
                              <div class="d-flex align-items-center">
                                <i class="material-icons">playlist_add_check</i>
                                <span>0/5</span>
                              </div>

                              <span class="text-small">Due 12 days</span>
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-11"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>Illustrations</h6></a
                              >
                            </div>

                            <div
                              class="card-meta d-flex justify-content-between"
                            >
                              <div class="d-flex align-items-center">
                                <i class="material-icons">playlist_add_check</i>
                                <span>0/6</span>
                              </div>

                              <span class="text-small">Due 12 days</span>
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-12"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>Device testing</h6></a
                              >
                            </div>

                            <ul class="avatars">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Masimba"
                                >
                                  <img
                                    alt="Masimba Sibanda"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-male-5.jpg"
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
                                <a href="#" data-toggle="tooltip" title="Harry">
                                  <img
                                    alt="Harry Xai"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-male-2.jpg"
                                  />
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Kerri-Anne"
                                >
                                  <img
                                    alt="Kerri-Anne Banks"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-female-5.jpg"
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
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Claire"
                                >
                                  <img
                                    alt="Claire Connors"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-female-1.jpg"
                                  />
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Marcus"
                                >
                                  <img
                                    alt="Marcus Simmons"
                                    class="avatar"
                                    src="~static/protocol/img/avatar-male-1.jpg"
                                  />
                                </a>
                              </li>
                            </ul>

                            <div
                              class="card-meta d-flex justify-content-between"
                            >
                              <div class="d-flex align-items-center">
                                <i class="material-icons">playlist_add_check</i>
                                <span>0/18</span>
                              </div>

                              <span class="text-small">Due 16 days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-list-footer">
                        <button class="btn btn-link btn-sm text-small">
                          Add task
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-col">
                    <div class="card-list">
                      <div class="card-list-header">
                        <h6>Backlog</h6>
                        <div class="dropdown">
                          <button
                            id="cardlist-dropdown-button-14"
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
                            <a class="dropdown-item text-danger" href="#"
                              >Archive List</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-list-body">
                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-14"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>A/B testing</h6></a
                              >
                            </div>
                          </div>
                        </div>

                        <div class="card card-kanban">
                          <div class="card-body">
                            <div class="dropdown card-options">
                              <button
                                id="kanban-dropdown-button-14"
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
                                <a class="dropdown-item text-danger" href="#"
                                  >Archive Card</a
                                >
                              </div>
                            </div>
                            <div class="card-title">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#task-modal"
                                ><h6>Email template</h6></a
                              >
                            </div>

                            <ul class="avatars">
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
                            </ul>

                            <div
                              class="card-meta d-flex justify-content-between"
                            >
                              <div class="d-flex align-items-center">
                                <i class="material-icons">playlist_add_check</i>
                                <span>-/-</span>
                              </div>

                              <span class="text-small">Unscheduled</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-list-footer">
                        <button class="btn btn-link btn-sm text-small">
                          Add task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--                <form class="col-md-auto">-->
            <!--                  <div class="input-group input-group-round">-->
            <!--                    <div class="input-group-prepend">-->
            <!--                      <span class="input-group-text">-->
            <!--                        <i class="material-icons">filter_list</i>-->
            <!--                      </span>-->
            <!--                    </div>-->
            <!--                    <input-->
            <!--                      type="search"-->
            <!--                      class="form-control filter-list-input"-->
            <!--                      placeholder="Filter activity"-->
            <!--                      aria-label="Filter activity"-->
            <!--                    />-->
            <!--                  </div>-->
            <!--                </form>-->
          </div>
          <!--end of content list head-->
        </div>
        <!--end of content list-->
      </div>
    </div>
    <form
      id="user-manage-modal"
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Manage Users</h5>
            <button
              type="button"
              class="close btn btn-round"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="material-icons">close</i>
            </button>
          </div>
          <!--end of modal head-->
          <div class="modal-body">
            <div class="users-manage" data-filter-list="form-group-users">
              <div class="mb-3">
                <ul class="avatars text-center">
                  <li>
                    <img
                      alt="Claire Connors"
                      src="~static/protocol/img/avatar-female-1.jpg"
                      class="avatar"
                      data-toggle="tooltip"
                      data-title="Claire Connors"
                    />
                  </li>

                  <li>
                    <img
                      alt="Marcus Simmons"
                      src="~static/protocol/img/avatar-male-1.jpg"
                      class="avatar"
                      data-toggle="tooltip"
                      data-title="Marcus Simmons"
                    />
                  </li>

                  <li>
                    <img
                      alt="Peggy Brown"
                      src="~static/protocol/img/avatar-female-2.jpg"
                      class="avatar"
                      data-toggle="tooltip"
                      data-title="Peggy Brown"
                    />
                  </li>

                  <li>
                    <img
                      alt="Harry Xai"
                      src="~static/protocol/img/avatar-male-2.jpg"
                      class="avatar"
                      data-toggle="tooltip"
                      data-title="Harry Xai"
                    />
                  </li>
                </ul>
              </div>
              <div class="input-group input-group-round">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">filter_list</i>
                  </span>
                </div>
                <input
                  type="search"
                  class="form-control filter-list-input"
                  placeholder="Filter members"
                  aria-label="Filter Members"
                />
              </div>
              <div class="form-group-users">
                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-1"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="user-manage-1">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Claire Connors"
                        src="~static/protocol/img/avatar-female-1.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Claire Connors</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-2"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="user-manage-2">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Marcus Simmons"
                        src="~static/protocol/img/avatar-male-1.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Marcus Simmons</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-3"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="user-manage-3">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Peggy Brown"
                        src="~static/protocol/img/avatar-female-2.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Peggy Brown</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-4"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="user-manage-4">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Harry Xai"
                        src="~static/protocol/img/avatar-male-2.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Harry Xai</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-5"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-5">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Sally Harper"
                        src="~static/protocol/img/avatar-female-3.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Sally Harper</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-6"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-6">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Ravi Singh"
                        src="~static/protocol/img/avatar-male-3.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Ravi Singh</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-7"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-7">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Kristina Van Der Stroem"
                        src="~static/protocol/img/avatar-female-4.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Kristina Van Der Stroem</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-8"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-8">
                    <span class="d-flex align-items-center">
                      <img
                        alt="David Whittaker"
                        src="~static/protocol/img/avatar-male-4.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >David Whittaker</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-9"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-9">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Kerri-Anne Banks"
                        src="~static/protocol/img/avatar-female-5.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Kerri-Anne Banks</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-10"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-10">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Masimba Sibanda"
                        src="~static/protocol/img/avatar-male-5.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Masimba Sibanda</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-11"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-11">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Krishna Bajaj"
                        src="~static/protocol/img/avatar-female-6.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Krishna Bajaj</span
                      >
                    </span>
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    id="user-manage-12"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="user-manage-12">
                    <span class="d-flex align-items-center">
                      <img
                        alt="Kenny Tran"
                        src="~static/protocol/img/avatar-male-6.jpg"
                        class="avatar mr-2"
                      />
                      <span class="h6 mb-0" data-filter-by="text"
                        >Kenny Tran</span
                      >
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!--end of modal body-->
          <div class="modal-footer">
            <button role="button" class="btn btn-primary" type="submit">
              Done
            </button>
          </div>
        </div>
      </div>
    </form>
    <form
      id="task-edit-modal"
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Task</h5>
            <button
              type="button"
              class="close btn btn-round"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="material-icons">close</i>
            </button>
          </div>
          <!--end of modal head-->
          <ul class="nav nav-tabs nav-fill" role="tablist">
            <li class="nav-item">
              <a
                id="task-edit-details-tab"
                class="nav-link active"
                data-toggle="tab"
                href="#task-edit-details"
                role="tab"
                aria-controls="task-edit-details"
                aria-selected="true"
                >Details</a
              >
            </li>
            <li class="nav-item">
              <a
                id="task-edit-members-tab"
                class="nav-link"
                data-toggle="tab"
                href="#task-edit-members"
                role="tab"
                aria-controls="task-edit-members"
                aria-selected="false"
                >Members</a
              >
            </li>
          </ul>
          <div class="modal-body">
            <div class="tab-content">
              <div
                id="task-edit-details"
                class="tab-pane fade show active"
                role="tabpanel"
              >
                <h6>General Details</h6>
                <div class="form-group row align-items-center">
                  <label class="col-3">Name</label>
                  <input
                    class="form-control col"
                    type="text"
                    placeholder="Task name"
                    value="Create brand mood boards"
                    name="task-name"
                  />
                </div>
                <div class="form-group row">
                  <label class="col-3">Description</label>
                  <textarea
                    class="form-control col"
                    rows="3"
                    placeholder="Task description"
                    name="task-description"
                  >
Assemble three distinct mood boards for client consideration</textarea
                  >
                </div>
                <hr />
                <h6>Timeline</h6>
                <div class="form-group row align-items-center">
                  <label class="col-3">Start Date</label>
                  <input
                    class="form-control col"
                    type="text"
                    name="task-start"
                    placeholder="Select a date"
                    data-flatpickr
                    data-default-date="2021-04-21"
                    data-alt-input="true"
                  />
                </div>
                <div class="form-group row align-items-center">
                  <label class="col-3">Due Date</label>
                  <input
                    class="form-control col"
                    type="text"
                    name="task-due"
                    placeholder="Select a date"
                    data-flatpickr
                    data-default-date="2021-09-15"
                    data-alt-input="true"
                  />
                </div>
                <div class="alert alert-warning text-small" role="alert">
                  <span>You can change due dates at any time.</span>
                </div>
              </div>
              <div id="task-edit-members" class="tab-pane fade" role="tabpanel">
                <div class="users-manage" data-filter-list="form-group-users">
                  <div class="mb-3">
                    <ul class="avatars text-center">
                      <li>
                        <img
                          alt="Claire Connors"
                          src="~static/protocol/img/avatar-female-1.jpg"
                          class="avatar"
                          data-toggle="tooltip"
                          data-title="Claire Connors"
                        />
                      </li>

                      <li>
                        <img
                          alt="Marcus Simmons"
                          src="~static/protocol/img/avatar-male-1.jpg"
                          class="avatar"
                          data-toggle="tooltip"
                          data-title="Marcus Simmons"
                        />
                      </li>

                      <li>
                        <img
                          alt="Peggy Brown"
                          src="~static/protocol/img/avatar-female-2.jpg"
                          class="avatar"
                          data-toggle="tooltip"
                          data-title="Peggy Brown"
                        />
                      </li>

                      <li>
                        <img
                          alt="Harry Xai"
                          src="~static/protocol/img/avatar-male-2.jpg"
                          class="avatar"
                          data-toggle="tooltip"
                          data-title="Harry Xai"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="input-group input-group-round">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="material-icons">filter_list</i>
                      </span>
                    </div>
                    <input
                      type="search"
                      class="form-control filter-list-input"
                      placeholder="Filter members"
                      aria-label="Filter Members"
                    />
                  </div>
                  <div class="form-group-users">
                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-1"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="task-user-1">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Claire Connors"
                            src="~static/protocol/img/avatar-female-1.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Claire Connors</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-2"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="task-user-2">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Marcus Simmons"
                            src="~static/protocol/img/avatar-male-1.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Marcus Simmons</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-3"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="task-user-3">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Peggy Brown"
                            src="~static/protocol/img/avatar-female-2.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Peggy Brown</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-4"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="task-user-4">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Harry Xai"
                            src="~static/protocol/img/avatar-male-2.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Harry Xai</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-5"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-5">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Sally Harper"
                            src="~static/protocol/img/avatar-female-3.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Sally Harper</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-6"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-6">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Ravi Singh"
                            src="~static/protocol/img/avatar-male-3.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Ravi Singh</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-7"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-7">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Kristina Van Der Stroem"
                            src="~static/protocol/img/avatar-female-4.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Kristina Van Der Stroem</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-8"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-8">
                        <span class="d-flex align-items-center">
                          <img
                            alt="David Whittaker"
                            src="~static/protocol/img/avatar-male-4.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >David Whittaker</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-9"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-9">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Kerri-Anne Banks"
                            src="~static/protocol/img/avatar-female-5.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Kerri-Anne Banks</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-10"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-10">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Masimba Sibanda"
                            src="~static/protocol/img/avatar-male-5.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Masimba Sibanda</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-11"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-11">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Krishna Bajaj"
                            src="~static/protocol/img/avatar-female-6.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Krishna Bajaj</span
                          >
                        </span>
                      </label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="task-user-12"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="task-user-12">
                        <span class="d-flex align-items-center">
                          <img
                            alt="Kenny Tran"
                            src="~static/protocol/img/avatar-male-6.jpg"
                            class="avatar mr-2"
                          />
                          <span class="h6 mb-0" data-filter-by="text"
                            >Kenny Tran</span
                          >
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end of modal body-->
          <div class="modal-footer">
            <button role="button" class="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>

    <form
      id="note-add-modal"
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Note</h5>
            <button
              type="button"
              class="close btn btn-round"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="material-icons">close</i>
            </button>
          </div>
          <!--end of modal head-->
          <div class="modal-body">
            <div class="form-group row align-items-center">
              <label class="col-3">Title</label>
              <input
                class="form-control col"
                type="text"
                placeholder="Note title"
                name="note-name"
              />
            </div>
            <div class="form-group row">
              <label class="col-3">Text</label>
              <textarea
                class="form-control col"
                rows="6"
                placeholder="Body text for note"
                name="note-description"
              ></textarea>
            </div>
          </div>
          <!--end of modal body-->
          <div class="modal-footer">
            <button role="button" class="btn btn-primary" type="submit">
              Create Note
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProtocolTask',
}
</script>

<style scoped>
@import '~static/protocol/css/theme.css';
@import '~static/protocol/css/materialIcon.css';
</style>
