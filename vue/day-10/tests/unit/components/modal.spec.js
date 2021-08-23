import Modal from '@/components/Modal'
import { generateWrapper } from '../generate'

test('Check if slot is rendered', () => {
  const wrapper = generateWrapper('shallowMount', Modal, {
    slots: {
      footer: '<div>Slot Found</div>'
    }
  })
  const footerWrapper = wrapper.find('.footer')
  expect(footerWrapper.text()).toContain('Slot Found')
})
