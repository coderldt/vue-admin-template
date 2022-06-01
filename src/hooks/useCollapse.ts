const collapseStatus = ref<Boolean>(false)

const handleCollapseChange = (): void => {
  collapseStatus.value = !collapseStatus.value
}

export {
  collapseStatus,
  handleCollapseChange
}