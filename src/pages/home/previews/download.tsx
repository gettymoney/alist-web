import { Button, HStack } from "@hope-ui/solid"
import { useCopyLink, useT } from "~/hooks"
import { objStore } from "~/store"
import { FileInfo } from "./info"
import { OpenWith } from "../file/open-with"
import { Show } from "solid-js"

export const Download = (props: {
  openWith?: boolean
  hideCover?: boolean
}) => {
  const t = useT()
  const { copyCurrentRawLink } = useCopyLink()
  return (
    <FileInfo hideCover={props.hideCover}>
      <HStack spacing="$2">
        <Button colorScheme="accent" onClick={() => copyCurrentRawLink(true)}>
          {t("home.toolbar.copy_link")}
        </Button>
        <Button
          as="a"
          href={objStore.raw_url}
          target="_blank"
          title={objStore.obj.name}
        >
          {t("home.preview.download")}
        </Button>
      </HStack>
      <Show when={props.openWith}>
        <OpenWith />
      </Show>
    </FileInfo>
  )
}

export default Download
