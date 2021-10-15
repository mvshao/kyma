module github.com/kyma-project/kyma/components/application-gateway

go 1.16

require (
	github.com/gorilla/mux v1.8.0
	github.com/kyma-project/kyma/components/application-operator v0.0.0-20210624133846-3e1e71e9f682
	github.com/patrickmn/go-cache v2.1.0+incompatible
	github.com/sirupsen/logrus v1.8.1
	github.com/stretchr/testify v1.7.0
	k8s.io/api v0.21.2
	k8s.io/apimachinery v0.21.2
	k8s.io/client-go v0.21.2
)

replace (
	github.com/containerd/containerd => github.com/containerd/containerd v1.4.4
	github.com/docker/docker => github.com/docker/docker v17.12.0-ce-rc1.0.20200916142827-bd33bbf0497b+incompatible
	github.com/opencontainers/runc => github.com/opencontainers/runc v1.0.0-rc92

	golang.org/x/crypto => golang.org/x/crypto v0.0.0-20201221181555-eec23a3978ad
	golang.org/x/text => golang.org/x/text v0.3.3
	github.com/kyma-project/kyma/components/application-operator => github.com/mvshao/kyma/components/application-connector/application-operator v0.0.0-20211015090617-5ccd48a13647
)
