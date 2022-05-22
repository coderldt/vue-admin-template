<script lang="tsx">
import { menu, Menu } from "@/config/menu";
// import { collapseStatus } from "@/hooks/collapse";
export default defineComponent({
  setup() {
    const baseMenuItem = (props: Menu) => {
      return (
        <>
          {props.icon && <el-icon>{h(resolveComponent(props.icon))}</el-icon>}
          <span>{props.title}</span>
        </>
      );
    };

    const createItem = (item: Menu[]) => {
      return item.map((i) => {
        if (i.children && i.children.length > 0) {
          return (
            <el-sub-menu index={i.path}>
              {{
                title: () => baseMenuItem(i),
                default: () => createItem(i.children as Menu[]),
              }}
            </el-sub-menu>
          );
        } else {
          return <el-menu-item index={i.path}>{baseMenuItem(i)}</el-menu-item>;
        }
      });
    };

    const router = useRoute();
    const defaultActivePath = ref("");
    setTimeout(() => {
      defaultActivePath.value = router.path;
    }, 500);

    return () => {
      return (
        <el-menu router default-active={defaultActivePath.value} collapse={true} collapse-transition class="el-menu-vertical-demo">
          {createItem(menu)}
        </el-menu>
      );
    };
  },
});
</script>

<style lang="less" scoped>
</style>
