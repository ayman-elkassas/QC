<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="page-header" style="padding-top: 0px">
                <p class="lead">
                  A small web studio crafting lovely template products.
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

                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Kerri-Anne Banks"
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
                        data-placement="top"
                        title="Masimba Sibanda"
                      >
                        <img
                          alt="Masimba Sibanda"
                          class="avatar"
                          src="~static/protocol/img/avatar-male-5.jpg"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Krishna Bajaj"
                      >
                        <img
                          alt="Krishna Bajaj"
                          class="avatar"
                          src="~static/protocol/img/avatar-female-6.jpg"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Kenny Tran"
                      >
                        <img
                          alt="Kenny Tran"
                          class="avatar"
                          src="~static/protocol/img/avatar-male-6.jpg"
                        />
                      </a>
                    </li>
                  </ul>
                  <button
                    class="btn btn-round flex-shrink-0"
                    data-toggle="modal"
                    data-target="#user-invite-modal"
                  >
                    <i class="material-icons">add</i>
                  </button>
                </div>
              </div>
              <hr />
              <ul class="nav nav-tabs nav-fill" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#projects"
                    role="tab"
                    aria-controls="projects"
                    aria-selected="true"
                    >Projects</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#members"
                    role="tab"
                    aria-controls="members"
                    aria-selected="false"
                    >Members</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <div
                  id="projects"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  data-filter-list="content-list-body"
                >
                  <div class="content-list">
                    <div class="row content-list-head">
                      <div class="col-auto">
                        <h3>Projects</h3>
                        <button
                          class="btn btn-round"
                          data-toggle="modal"
                          data-target="#project-add-modal"
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
                            placeholder="Filter projects"
                            aria-label="Filter Projects"
                          />
                        </div>
                      </form>
                    </div>
                    <!--end of content list head-->
                    <div class="content-list-body row">
                      <div v-for="(col, index) in 6" :key="index" class="col-4">
                        <div @click="$router.push('/protocol/ProtocolDetails')">
                          <ProtocolCard></ProtocolCard>
                        </div>
                      </div>
                    </div>
                    <!--end of content list body-->
                  </div>
                  <!--end of content list-->
                </div>
                <!--end of tab-->
                <div
                  id="members"
                  class="tab-pane fade"
                  role="tabpanel"
                  data-filter-list="content-list-body"
                >
                  <div class="content-list">
                    <div class="row content-list-head">
                      <div class="col-auto">
                        <h3>Members</h3>
                        <button
                          class="btn btn-round"
                          data-toggle="modal"
                          data-target="#user-invite-modal"
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
                            placeholder="Filter members"
                            aria-label="Filter Members"
                          />
                        </div>
                      </form>
                    </div>
                    <!--end of content list head-->
                    <div class="content-list-body row">
                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Claire Connors"
                            src="~static/protocol/img/avatar-female-1.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Claire Connors
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Administrator</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Marcus Simmons"
                            src="~static/protocol/img/avatar-male-1.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Marcus Simmons
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Administrator</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Peggy Brown"
                            src="~static/protocol/img/avatar-female-2.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Peggy Brown
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Project Manager</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Harry Xai"
                            src="~static/protocol/img/avatar-male-2.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Harry Xai
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Project Manager</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Sally Harper"
                            src="~static/protocol/img/avatar-female-3.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Sally Harper
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Developer</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Ravi Singh"
                            src="~static/protocol/img/avatar-male-3.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Ravi Singh
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Developer</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Kristina Van Der Stroem"
                            src="~static/protocol/img/avatar-female-4.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Kristina Van Der Stroem
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Developer</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="David Whittaker"
                            src="~static/protocol/img/avatar-male-4.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              David Whittaker
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Designer</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Kerri-Anne Banks"
                            src="~static/protocol/img/avatar-female-5.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Kerri-Anne Banks
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Marketing</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Masimba Sibanda"
                            src="~static/protocol/img/avatar-male-5.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Masimba Sibanda
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Designer</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Krishna Bajaj"
                            src="~static/protocol/img/avatar-female-6.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Krishna Bajaj
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Marketing</span
                            >
                          </div>
                        </a>
                      </div>

                      <div class="col-6">
                        <a class="media media-member" href="#">
                          <img
                            alt="Kenny Tran"
                            src="~static/protocol/img/avatar-male-6.jpg"
                            class="avatar avatar-lg"
                          />
                          <div class="media-body">
                            <h6 class="mb-0" data-filter-by="text">
                              Kenny Tran
                            </h6>
                            <span data-filter-by="text" class="text-body"
                              >Contributor</span
                            >
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!--end of content list-->
                </div>
              </div>
              <form
                id="user-invite-modal"
                class="modal fade"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Invite Users</h5>
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
                      <p>
                        Send an invite link via email to add members to this
                        team
                      </p>
                      <div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">email</i>
                            </span>
                          </div>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Recipient email address"
                            aria-label="Recipient email address"
                          />
                        </div>
                        <div class="text-right text-small mt-2">
                          <a href="#" role="button">Add another recipient</a>
                        </div>
                      </div>
                    </div>
                    <!--end of modal body-->
                    <div class="modal-footer">
                      <button
                        role="button"
                        class="btn btn-primary"
                        type="submit"
                      >
                        Invite users
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <form
                id="team-manage-modal"
                class="modal fade"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Manage Team</h5>
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
                          id="team-manage-details-tab"
                          class="nav-link active"
                          data-toggle="tab"
                          href="#team-manage-details"
                          role="tab"
                          aria-controls="team-manage-details"
                          aria-selected="true"
                          >Details</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          id="team-manage-members-tab"
                          class="nav-link"
                          data-toggle="tab"
                          href="#team-manage-members"
                          role="tab"
                          aria-controls="team-manage-members"
                          aria-selected="false"
                          >Members</a
                        >
                      </li>
                    </ul>
                    <div class="modal-body">
                      <div class="tab-content">
                        <div
                          id="team-manage-details"
                          class="tab-pane fade show active"
                          role="tabpanel"
                        >
                          <h6>Team Details</h6>
                          <div class="form-group row align-items-center">
                            <label class="col-3">Name</label>
                            <input
                              class="form-control col"
                              type="text"
                              placeholder="Team name"
                              name="team-name"
                              value="Medium Rare"
                            />
                          </div>
                          <div class="form-group row">
                            <label class="col-3">Description</label>
                            <textarea
                              class="form-control col"
                              rows="3"
                              placeholder="Team description"
                              name="team-description"
                            >
A small web studio crafting lovely template products.</textarea
                            >
                          </div>
                        </div>
                        <div
                          id="team-manage-members"
                          class="tab-pane fade"
                          role="tabpanel"
                        >
                          <div
                            class="users-manage"
                            data-filter-list="form-group-users"
                          >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-1"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-2"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-3"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-4"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-5"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-6"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-7"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-8"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-9"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-10"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-11"
                                >
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
                                <label
                                  class="custom-control-label"
                                  for="user-manage-12"
                                >
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
                      <button
                        role="button"
                        class="btn btn-primary"
                        type="submit"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <form
                id="project-add-modal"
                class="modal fade"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">New Project</h5>
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
                          id="project-add-details-tab"
                          class="nav-link active"
                          data-toggle="tab"
                          href="#project-add-details"
                          role="tab"
                          aria-controls="project-add-details"
                          aria-selected="true"
                          >Details</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          id="project-add-members-tab"
                          class="nav-link"
                          data-toggle="tab"
                          href="#project-add-members"
                          role="tab"
                          aria-controls="project-add-members"
                          aria-selected="false"
                          >Members</a
                        >
                      </li>
                    </ul>
                    <div class="modal-body">
                      <div class="tab-content">
                        <div
                          id="project-add-details"
                          class="tab-pane fade show active"
                          role="tabpanel"
                        >
                          <h6>General Details</h6>
                          <div class="form-group row align-items-center">
                            <label class="col-3">Name</label>
                            <input
                              class="form-control col"
                              type="text"
                              placeholder="Project name"
                              name="project-name"
                            />
                          </div>
                          <div class="form-group row">
                            <label class="col-3">Description</label>
                            <textarea
                              class="form-control col"
                              rows="3"
                              placeholder="Project description"
                              name="project-description"
                            ></textarea>
                          </div>
                          <hr />
                          <h6>Timeline</h6>
                          <div class="form-group row align-items-center">
                            <label class="col-3">Deadline</label>
                            <!--                              <VueDatePicker-->
                            <!--                                v-model="date"-->
                            <!--                                :min-date="minDate"-->
                            <!--                                :max-date="maxDate"-->
                            <!--                                placeholder="from ~ to"-->
                            <!--                                range-->
                            <!--                                range-header-text="From %d To %d"-->
                            <!--                                range-input-text="From %d To %d"-->
                            <!--                                validate-->
                            <!--                                no-header-->
                            <!--                              />-->
                          </div>
                          <div
                            class="alert alert-warning text-small"
                            role="alert"
                          >
                            <span>You can change due dates at any time.</span>
                          </div>
                          <hr />
                          <h6>Visibility</h6>
                          <div class="row">
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  id="visibility-everyone"
                                  type="radio"
                                  name="visibility"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="visibility-everyone"
                                  >Everyone</label
                                >
                              </div>
                            </div>
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  id="visibility-members"
                                  type="radio"
                                  name="visibility"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="visibility-members"
                                  >Members</label
                                >
                              </div>
                            </div>
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  id="visibility-me"
                                  type="radio"
                                  name="visibility"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="visibility-me"
                                  >Just me</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="project-add-members"
                          class="tab-pane fade"
                          role="tabpanel"
                        >
                          <div
                            class="users-manage"
                            data-filter-list="form-group-users"
                          >
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
                                  id="project-user-1"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-1"
                                >
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
                                  id="project-user-2"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-2"
                                >
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
                                  id="project-user-3"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-3"
                                >
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
                                  id="project-user-4"
                                  type="checkbox"
                                  class="custom-control-input"
                                  checked
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-4"
                                >
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
                                  id="project-user-5"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-5"
                                >
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
                                  id="project-user-6"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-6"
                                >
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
                                  id="project-user-7"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-7"
                                >
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
                                  id="project-user-8"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-8"
                                >
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
                                  id="project-user-9"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-9"
                                >
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
                                  id="project-user-10"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-10"
                                >
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
                                  id="project-user-11"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-11"
                                >
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
                                  id="project-user-12"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="project-user-12"
                                >
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
                      <button
                        role="button"
                        class="btn btn-primary"
                        type="submit"
                      >
                        Create Project
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProtocolCard from '@/components/protocol/ProtocolCard'

export default {
  name: 'Index',
  components: { ProtocolCard },
  layout: 'dashboard/home',
  data() {
    return {
      active: false,
      // date: new Date(),
      // currentDate: new Date(),
    }
  },
  computed: {
    // minDate() {
    //   return new Date(
    //     this.currentDate.getFullYear() - 1,
    //     this.currentDate.getMonth(),
    //     this.currentDate.getDate()
    //   )
    // },
    // maxDate() {
    //   return new Date(
    //     this.currentDate.getFullYear() + 1,
    //     this.currentDate.getMonth(),
    //     this.currentDate.getDate()
    //   )
    // },
  },
}
</script>

<style scoped>
@import '~static/protocol/css/theme.css';
@import '~static/protocol/css/materialIcon.css';
</style>
