          <div class="row">
              <div class="col-12 col-lg-6 col-xl-3">
                  <div class="widget widget-tile">
                      <div class="chart sparkline" id="spark1"><canvas width="85" height="35"
                              style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                      </div>
                      <div class="data-info">
                          <div class="desc">Sản phẩm</div>
                          <div class="value"><span class="indicator indicator-equal mdi mdi-chevron-right"></span><span
                                  class="number" data-toggle="counter" data-end="<?= $teachers ?>">
                                  <?= count($products) ?>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-3">
                  <div class="widget widget-tile">
                      <div class="chart sparkline" id="spark3"><canvas width="85" height="35"
                              style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                      </div>
                      <div class="data-info">
                          <div class="desc">Đơn hàng</div>
                          <div class="value"><span class="indicator indicator-equal mdi mdi-chevron-right">
                              </span><span class="number" data-toggle="counter" data-end="<?= $classRooms ?>">
                                  <?= count($orders) ?>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-lg-6 col-xl-3">
                  <div class="widget widget-tile">
                      <div class="chart sparkline" id="spark4"><canvas width="85" height="35"
                              style="display: inline-block; width: 85px; height: 35px; vertical-align: top;"></canvas>
                      </div>
                      <div class="data-info">
                          <div class="desc">Khách hàng</div>
                          <div class="value"><span class="indicator indicator-equal mdi mdi-chevron-right">
                              </span><span class="number" data-toggle="counter" data-end="<?= $transactions ?>">
                                  <?= count($users) ?>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          @script
          <script src="/assets/lib/countup/countUp.min.js" type="text/javascript"></script>
          <script>
$(document).ready(function() {
    //-initialize the javascript
    App.init();
    App.dashboard();
});
          </script>
          @endScript