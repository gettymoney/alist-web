import { Error, FullLoading, ImageWithError } from "~/components"
import { useT } from "~/hooks"
import { objStore } from "~/store"
import Download from "./download"

const Preview = () => {
  const t = useT()
  return (
    <>
      <ImageWithError
        src={objStore.raw_url}
        alt={objStore.obj.name}
        fallback={<FullLoading />}
        fallbackErr={<Error msg={t("home.preview.failed_load_img")} />}
      />

      <Download hideCover />
    </>
  )
}

export default Preview
