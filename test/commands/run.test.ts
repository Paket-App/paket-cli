import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('run', () => {
  it('runs run cmd', async () => {
    const {stdout} = await runCommand('run')
    expect(stdout).to.contain('hello world')
  })

  it('runs run --name oclif', async () => {
    const {stdout} = await runCommand('run --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
