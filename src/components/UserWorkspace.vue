<template>
	<Tabs id="userContent" ref="tabs">
		<Tab v-if="supportsJobs" id="jobs" name="Batch Jobs" icon="fa-tasks">
			<JobPanel />
		</Tab>
		<Tab v-if="supportsServices" id="services" name="Web Services" icon="fa-cloud">
			<ServicePanel />
		</Tab>
		<Tab v-if="supportsProcessGraphs" id="storedProcessGraphs" name="Process Graphs" icon="fa-code-branch">
			<ProcessGraphPanel />
		</Tab>
		<Tab v-if="supportsFiles" id="files" name="Files" icon="fa-file">
			<FilePanel />
		</Tab>
	</Tabs>
</template>

<script>
import Utils from '../utils.js';
import Tabs from '@openeo/vue-components/components/Tabs.vue';
import Tab from '@openeo/vue-components/components/Tab.vue';
import ConnectionMixin from './ConnectionMixin.vue';
import FilePanel from './FilePanel.vue';
import JobPanel from './JobPanel.vue';
import ProcessGraphPanel from './ProcessGraphPanel.vue';
import ServicePanel from './ServicePanel.vue';

export default {
	name: 'UserWorkspace',
	mixins: [ConnectionMixin],
	components: {
		FilePanel,
		JobPanel,
		ProcessGraphPanel,
		ServicePanel,
		Tabs,
		Tab
	},
	computed: {
		supportsJobs() {
			return (this.supports('listJobs') || this.supports('createJob'));
		},
		supportsServices() {
			return (this.supports('listServices') || this.supports('createService'));
		},
		supportsProcessGraphs() {
			return (this.supports('listProcessGraphs') || this.supports('createProcessGraph'));
		},
		supportsFiles() {
			return (this.supports('listFiles') || this.supports('uploadFile'));
		}
	}
}
</script>

<style>
#userContent {
	margin-top: 1em;
}
#userContent .tabContent {
	padding: 5px;
	height: calc(100% - 12px);
}
</style>