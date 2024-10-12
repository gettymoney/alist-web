import { HStack, VStack } from "@hope-ui/solid"
import { useT } from "~/hooks"
import { getSetting } from "~/store"

export const Footer = () => {
  const t = useT()
  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1" class="hidden">
        {getSetting("site_title")}
        <span>@</span>
        {new Date().getFullYear()}
      </HStack>
    </VStack>
  )
}
