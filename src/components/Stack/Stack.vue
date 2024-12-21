<template>
  <div>
    <div :id="props.id" :class="builtClass" :style="builtStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
enum HorizontalAlignment {
  Left = "Left",
  Start = "Start",
  Center = "Center",
  Right = "Right",
  End = "End",
  Stretch = "Stretch",
}

enum VerticalAlignment {
  Top = "Top",
  Center = "Center",
  Bottom = "Bottom",
}

enum Orientation {
  Horizontal = "Horizontal",
  Vertical = "Vertical",
}

const props = defineProps({
  id: String,
  classValue: String,
  styleValue: String,
  data: Object,
  // parentReference
  additionalAttributes: Object,

  horizontalAlignment: {
    type: String as PropType<HorizontalAlignment>,
    default: HorizontalAlignment.Left,
  },
  verticalAlignment: {
    type: String as PropType<VerticalAlignment>,
    default: VerticalAlignment.Top,
  },
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Horizontal,
  },
  width: {
    type: String,
    default: "100%",
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  horizontalGap: {
    type: Number,
    default: 10,
  },
  verticalGap: {
    type: Number,
    default: 10,
  },

  // childContent
});

const builtClass = new CssBuilder(props.classValue)
  .addClass(
    "stack-horizontal",
    () => props.orientation === Orientation.Horizontal
  )
  .addClass("stack-vertical", () => props.orientation === Orientation.Vertical)
  .build();

const getHorizontalAlignment = () => {
  switch (props.horizontalAlignment) {
    case HorizontalAlignment.Left:
      return "start";
    case HorizontalAlignment.Start:
      return "start";
    case HorizontalAlignment.Center:
      return "center";
    case HorizontalAlignment.Right:
      return "end";
    case HorizontalAlignment.End:
      return "end";
    case HorizontalAlignment.Stretch:
      return "stretch";
    default:
      return "start";
  }
};

const getVerticalAlignment = () => {
  switch (props.verticalAlignment) {
    case VerticalAlignment.Top:
      return "start";
    case VerticalAlignment.Center:
      return "center";
    case VerticalAlignment.Bottom:
      return "end";
    default:
      return "start";
  }
};

const builtStyle = new StyleBuilder(props.styleValue)
  .addStyle(
    "align-items",
    getHorizontalAlignment(),
    () => props.orientation == Orientation.Vertical
  )
  .addStyle(
    "justify-content",
    getVerticalAlignment(),
    () => props.orientation == Orientation.Vertical
  )
  .addStyle(
    "justify-content",
    getHorizontalAlignment(),
    () => props.orientation === Orientation.Horizontal
  )
  .addStyle(
    "align-items",
    getVerticalAlignment(),
    () => props.orientation === Orientation.Horizontal
  )
  .addStyle("column-gap", `${props.horizontalGap}px`, () =>
    Boolean(props.horizontalGap)
  )
  .addStyle("row-gap", `${props.verticalGap}px`, () =>
    Boolean(props.verticalGap)
  )
  .addStyle(
    "width",
    props.width,
    () =>
      props.width !== "" && props.width !== undefined && props.width !== null
  )
  .addStyle("flex-wrap", "wrap", () => props.wrap)
  .build();
</script>

<style scoped lang="scss">
.stack-vertical {
  display: flex;
  flex-direction: column;
}

.stack-horizontal {
  display: flex;
  flex-direction: row;
}
</style>
