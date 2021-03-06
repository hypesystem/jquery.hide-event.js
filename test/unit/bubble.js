QUnit.module("Bubbling");

QUnit.test("Remove triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer'>Outer <div class='inner'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.remove', function(e) {
      if (e.namespace == "remove")
        ok(false, "Remove shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('showandtell.remove', function(e) {
      if (e.namespace == "remove")
        ok(true, "Remove triggered on .inner");
    })
    .remove();
});

QUnit.test("Hide triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer'>Outer <div class='inner'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.hide', function(e) {
      if (e.namespace == "hide")
        ok(false, "Hide shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('showandtell.hide', function(e) {
      if (e.namespace == "hide")
        ok(true, "Hide triggered on .inner");
    })
    .hide();
});

QUnit.test("Show triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer' style='display:none;'>Outer <div class='inner' style='display:none;'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.show', function(e) {
      if (e.namespace == "show")
        ok(false, "Show shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('showandtell.show', function(e) {
      if (e.namespace == "show")
        ok(true, "Show triggered on .inner");
    })
    .show();
});

QUnit.test("Display:none hide triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer'>Outer <div class='inner'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(false, "Hide shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('showandtell.cssHide', function(e) {
      if (e.namespace == "cssHide")
        ok(true, "Hide triggered on .inner");
    })
    .css('display','none');
});

QUnit.test("Display:block show triggering does not bubble up", function(assert) {
  expect(1);
  $("<div class='outer' style='display:none;'>Outer <div class='inner' style='display:none;'>Inner</div></div>")
    .appendTo("#qunit-fixture")
    .bind('showandtell.cssShow', function(e) {
      if (e.namespace == "cssShow")
        ok(false, "Show shouldn't trigger on .outer!");
    })
    .find('.inner')
    .bind('showandtell.cssShow', function(e) {
      if (e.namespace == "cssShow")
        ok(true, "Show triggered on .inner");
    })
    .css('display','block');
});
